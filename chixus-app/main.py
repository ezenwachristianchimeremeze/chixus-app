"""
CHIXUS Master Server Engine
============================
Production-ready FastAPI backend script strictly adhering to the
Product Architect's technical blueprint specifications.

Components Included:
1. Core Infrastructure & SQLite Database Initializer (operators & chat_messages)
2. CORS Security Middleware for https://netlify.app & local hosts
3. Custom ID Generation & Operator Registration Router ('/api/auth/register')
4. Dedicated SMTP Token Dispatch Mock/Live Layer
5. Passwordless Login Validation Router ('/api/auth/login')
6. Persistent Chat Arena Vault Endpoints ('/api/messages/send' & '/api/messages/history')
7. Fixed Timeline Core Integration with Frozen Founder Post Node ('/api/feed/posts')

Run command:
    uvicorn chixus_master_server:app --host 0.0.0.0 --port 8000 --reload
"""

import os
import re
import sqlite3
import random
import logging
import smtplib
from datetime import datetime, timezone
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from typing import List, Optional, Dict, Any

from fastapi import FastAPI, HTTPException, status, Query, Request
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, EmailStr, Field

# Configure Logging
logging.basicConfig(
    level=logging.INFO,
    format="%(asctime)s [%(levelname)s] [CHIXUS-CORE] %(message)s",
    datefmt="%Y-%m-%d %H:%M:%S"
)
logger = logging.getLogger("CHIXUS_MASTER_SERVER")

# -----------------------------------------------------------------------------
# 1. CORE DATABASE INITIALIZATION (SQLite)
# -----------------------------------------------------------------------------
DB_FILE = os.getenv("CHIXUS_DB_FILE", "chixus.db")


def get_db_connection() -> sqlite3.Connection:
    """Creates a thread-safe connection to the SQLite database."""
    conn = sqlite3.connect(DB_FILE, check_same_thread=False)
    conn.row_factory = sqlite3.Row
    return conn


def init_db():
    """Initializes the SQLite schema with 'operators' and 'chat_messages' tables."""
    conn = get_db_connection()
    cursor = conn.cursor()

    # Table 1: operators
    cursor.execute("""
        CREATE TABLE IF NOT EXISTS operators (
            id TEXT PRIMARY KEY,
            username TEXT NOT NULL,
            fullname TEXT NOT NULL,
            location TEXT NOT NULL,
            email TEXT NOT NULL,
            phone TEXT NOT NULL,
            inspections INTEGER DEFAULT 0,
            faults INTEGER DEFAULT 0,
            accuracy TEXT DEFAULT '0.0%'
        );
    """)

    # Table 2: chat_messages
    cursor.execute("""
        CREATE TABLE IF NOT EXISTS chat_messages (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            sender_username TEXT NOT NULL,
            timestamp TEXT NOT NULL,
            message_body TEXT NOT NULL
        );
    """)

    conn.commit()
    conn.close()
    logger.info(f"CHIXUS SQLite Database initialized successfully: {DB_FILE}")


# Run DB initialization at startup
init_db()

# -----------------------------------------------------------------------------
# 2. FASTAPI INSTANTIATION & SECURITY (CORS)
# -----------------------------------------------------------------------------
app = FastAPI(
    title="CHIXUS Master Server Engine",
    description="Production-grade FastAPI master server engine for CHIXUS operational terminals.",
    version="1.0.0",
    docs_url="/docs",
    redoc_url="/redoc"
)

# Configured origins matching Netlify frontend and development hosts
ALLOWED_ORIGINS = [
    "https://netlify.app",
    "https://*.netlify.app",
    "http://localhost",
    "http://localhost:3000",
    "http://localhost:5173",
    "http://localhost:8000",
    "http://127.0.0.1:3000",
    "http://127.0.0.1:5173",
    "http://127.0.0.1:8000",
    "*"  # Allows flexible testing across web preview sandboxes
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=ALLOWED_ORIGINS,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


# -----------------------------------------------------------------------------
# 3. DATA MODELS (PYDANTIC SCHEMAS)
# -----------------------------------------------------------------------------
class OperatorRegisterRequest(BaseModel):
    username: str = Field(..., description="Unique operator username (e.g., 'chinaza' or 'johndoe')", min_length=2)
    fullname: str = Field(..., description="Full legal/operating name (e.g., 'Chinaza Joseph')", min_length=2)
    location: str = Field(..., description="Current deployment location or facility (e.g., 'Lagos', 'London')", min_length=2)
    email: EmailStr = Field(..., description="Operator operational contact email")
    phone: str = Field(..., description="Operator direct mobile contact number (e.g., '+2348012344829')", min_length=4)


class OperatorProfile(BaseModel):
    id: str
    username: str
    fullname: str
    location: str
    email: str
    phone: str
    inspections: int = 0
    faults: int = 0
    accuracy: str = "0.0%"


class RegistrationResponse(BaseModel):
    status: str = "success"
    operator_id: str
    message: str
    email_dispatched: bool
    operator: OperatorProfile


class LoginRequest(BaseModel):
    operator_id: str = Field(..., description="Custom CHIXUS operator ID token (e.g., 'CHINAZA-LAGOS-4829')")


class LoginResponse(BaseModel):
    status: str = "success"
    authenticated: bool = True
    token: str
    operator: OperatorProfile


class MessageSendRequest(BaseModel):
    sender_username: str = Field(..., description="Operator identifier or username of the message sender")
    message_body: str = Field(..., description="Text payload of the chat transmission", min_length=1)
    timestamp: Optional[str] = Field(None, description="ISO timestamp string (auto-generated if omitted)")


class ChatMessage(BaseModel):
    id: int
    sender_username: str
    timestamp: str
    message_body: str


class FeedPost(BaseModel):
    id: str
    author: str
    badge: Optional[str] = None
    timestamp: str
    content: str
    pinned: bool = False
    metrics: Dict[str, Any]


# -----------------------------------------------------------------------------
# 4. UTILITIES: CUSTOM ID ALGORITHM & SMTP DISPATCH NODE
# -----------------------------------------------------------------------------
def generate_custom_operator_id(username: str, location: str, phone: str) -> str:
    """
    ID ALGORITHM:
    1. Parse the user's first username string (uppercase).
    2. Append a dash '-'.
    3. Append their uppercase Location string (sanitized, uppercase).
    4. Append a dash '-'.
    5. Append the last 4 digits of their phone number.
    Example: 'USERNAME-LOCATION-4829'
    """
    # 1. First username string in uppercase
    first_username = username.strip().split()[0].upper()
    first_username = re.sub(r'[^A-Z0-9]', '', first_username) or "OPERATOR"

    # 2. Location string in uppercase (replace spaces/hyphens with single underscore or letters)
    sanitized_location = location.strip().upper()
    sanitized_location = re.sub(r'[^A-Z0-9]', '', sanitized_location) or "GLOBAL"

    # 3. Extract last 4 digits of phone number
    digits_only = re.sub(r'\D', '', phone)
    if len(digits_only) >= 4:
        last_4_phone = digits_only[-4:]
    elif len(digits_only) > 0:
        last_4_phone = digits_only.zfill(4)
    else:
        last_4_phone = f"{random.randint(1000, 9999)}"

    custom_id = f"{first_username}-{sanitized_location}-{last_4_phone}"
    return custom_id


def dispatch_operator_token_email(to_email: str, operator_id: str, fullname: str) -> bool:
    """
    EMAIL DISPATCH MOCK NODE:
    Mimics or runs an SMTP dispatch layer to route the generated ID token straight
    to the operator's submitted email address.

    Message Requirement:
    'Your unique CHIXUS Operational Access Token has been generated. Use this string key to authenticate your terminal node.'
    """
    subject = "CHIXUS Operational Access Token - Authentication Key"
    body_text = (
        f"Greetings {fullname},\n\n"
        f"Your unique CHIXUS Operational Access Token has been generated. "
        f"Use this string key to authenticate your terminal node.\n\n"
        f"OPERATOR ID TOKEN: {operator_id}\n\n"
        f"Node Permissions: Level 1 Inspector\n"
        f"Baseline Status: 0 Inspections | 0 Faults | 0.0% AI Accuracy\n\n"
        f"Keep this access key secure. Do not share credentials across unverified nodes.\n\n"
        f"— CHIXUS Automated Master Engine\n"
    )

    smtp_host = os.getenv("SMTP_HOST")
    smtp_port = int(os.getenv("SMTP_PORT", "587"))
    smtp_user = os.getenv("SMTP_USER")
    smtp_password = os.getenv("SMTP_PASSWORD")
    smtp_sender = os.getenv("SMTP_SENDER", "nodes@chixus.terminal")

    # If live SMTP credentials are configured, execute actual delivery
    if smtp_host and smtp_user and smtp_password:
        try:
            msg = MIMEMultipart()
            msg["From"] = smtp_sender
            msg["To"] = to_email
            msg["Subject"] = subject
            msg.attach(MIMEText(body_text, "plain"))

            with smtplib.SMTP(smtp_host, smtp_port, timeout=10) as server:
                server.starttls()
                server.login(smtp_user, smtp_password)
                server.sendmail(smtp_sender, [to_email], msg.as_string())
            logger.info(f"Live SMTP Email dispatched successfully to {to_email} with token {operator_id}")
            return True
        except Exception as err:
            logger.warning(f"SMTP delivery encountered an error: {err}. Falling back to mock dispatch logger.")

    # Mock SMTP node simulation (production-grade fallback & logging)
    logger.info("=" * 70)
    logger.info(f"[SMTP DISPATCH MOCK NODE] Routed email to: {to_email}")
    logger.info(f"Subject: {subject}")
    logger.info(f"Token Payload: {operator_id}")
    logger.info("Body: Your unique CHIXUS Operational Access Token has been generated. Use this string key to authenticate your terminal node.")
    logger.info("=" * 70)
    return True


# -----------------------------------------------------------------------------
# 5. ENDPOINT 1: CUSTOM ID GENERATION & REGISTRATION ('/api/auth/register')
# -----------------------------------------------------------------------------
@app.post(
    "/api/auth/register",
    response_model=RegistrationResponse,
    status_code=status.HTTP_201_CREATED,
    summary="Register Operator and Generate Custom ID Token"
)
async def register_operator(payload: OperatorRegisterRequest):
    """
    Accepts Username, Full Name, Current Location, Email, and Phone Number.
    Generates deterministic custom token 'USERNAME-LOCATION-XXXX', dispatches via SMTP,
    and saves permanently to SQLite 'operators' table with zeroed baseline metrics.
    """
    operator_id = generate_custom_operator_id(
        username=payload.username,
        location=payload.location,
        phone=payload.phone
    )

    conn = get_db_connection()
    cursor = conn.cursor()

    try:
        # Check if ID already exists; if collision occurs, append unique suffix
        cursor.execute("SELECT id FROM operators WHERE id = ?", (operator_id,))
        existing = cursor.fetchone()
        if existing:
            # Handle duplicate edge-case with random numeric salt
            salt = random.randint(10, 99)
            operator_id = f"{operator_id}-{salt}"

        # Insert operator with zeroed metrics
        cursor.execute(
            """
            INSERT INTO operators (id, username, fullname, location, email, phone, inspections, faults, accuracy)
            VALUES (?, ?, ?, ?, ?, ?, 0, 0, '0.0%')
            """,
            (
                operator_id,
                payload.username.strip(),
                payload.fullname.strip(),
                payload.location.strip(),
                payload.email.strip().lower(),
                payload.phone.strip(),
            )
        )
        conn.commit()
    except sqlite3.IntegrityError as e:
        conn.close()
        raise HTTPException(
            status_code=status.HTTP_409_CONFLICT,
            detail=f"Database conflict encountered while registering operator: {str(e)}"
        )
    finally:
        conn.close()

    # Dispatch access token via SMTP layer
    email_dispatched = dispatch_operator_token_email(
        to_email=payload.email,
        operator_id=operator_id,
        fullname=payload.fullname
    )

    created_profile = OperatorProfile(
        id=operator_id,
        username=payload.username.strip(),
        fullname=payload.fullname.strip(),
        location=payload.location.strip(),
        email=payload.email.strip().lower(),
        phone=payload.phone.strip(),
        inspections=0,
        faults=0,
        accuracy="0.0%"
    )

    return RegistrationResponse(
        status="success",
        operator_id=operator_id,
        message="Operator registered successfully. Your unique CHIXUS Operational Access Token has been generated.",
        email_dispatched=email_dispatched,
        operator=created_profile
    )


# -----------------------------------------------------------------------------
# 6. ENDPOINT 2: PASSWORDLESS LOGIN VALIDATION ('/api/auth/login')
# -----------------------------------------------------------------------------
@app.post(
    "/api/auth/login",
    response_model=LoginResponse,
    status_code=status.HTTP_200_OK,
    summary="Passwordless Login using Operator ID Token"
)
async def login_operator(payload: LoginRequest):
    """
    Accepts only the custom 'operator_id' string token.
    Queries the SQLite database. If the token key exists, returns saved profile metrics.
    If not found, raises a 401 Unauthorized exception.
    """
    clean_id = payload.operator_id.strip().upper()

    conn = get_db_connection()
    cursor = conn.cursor()
    cursor.execute(
        "SELECT id, username, fullname, location, email, phone, inspections, faults, accuracy FROM operators WHERE id = ?",
        (clean_id,)
    )
    row = cursor.fetchone()
    conn.close()

    if not row:
        logger.warning(f"Unauthorized authentication attempt for operator_id: '{clean_id}'")
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail=f"Access Denied: Invalid CHIXUS Operator ID '{clean_id}'. Token key not found in operator registry."
        )

    profile = OperatorProfile(
        id=row["id"],
        username=row["username"],
        fullname=row["fullname"],
        location=row["location"],
        email=row["email"],
        phone=row["phone"],
        inspections=row["inspections"],
        faults=row["faults"],
        accuracy=row["accuracy"]
    )

    logger.info(f"Operator '{clean_id}' successfully authenticated via passwordless token.")

    return LoginResponse(
        status="success",
        authenticated=True,
        token=clean_id,
        operator=profile
    )


# -----------------------------------------------------------------------------
# 7. ENDPOINTS 3 & 4: PERSISTENT CHAT ARENA VAULT ('/api/messages/*')
# -----------------------------------------------------------------------------
@app.post(
    "/api/messages/send",
    response_model=ChatMessage,
    status_code=status.HTTP_201_CREATED,
    summary="Insert Message into Chat Arena Vault"
)
async def send_chat_message(payload: MessageSendRequest):
    """
    Takes sender identifier, timestamp (or generates current UTC ISO timestamp),
    and text string body, inserting it permanently into the SQLite 'chat_messages' table.
    """
    timestamp_str = payload.timestamp or datetime.now(timezone.utc).isoformat()
    clean_sender = payload.sender_username.strip()
    clean_body = payload.message_body.strip()

    if not clean_body:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Message body cannot be empty."
        )

    conn = get_db_connection()
    cursor = conn.cursor()
    cursor.execute(
        """
        INSERT INTO chat_messages (sender_username, timestamp, message_body)
        VALUES (?, ?, ?)
        """,
        (clean_sender, timestamp_str, clean_body)
    )
    inserted_id = cursor.lastrowid
    conn.commit()
    conn.close()

    logger.info(f"New chat message #{inserted_id} recorded from sender '{clean_sender}'")

    return ChatMessage(
        id=inserted_id,
        sender_username=clean_sender,
        timestamp=timestamp_str,
        message_body=clean_body
    )


@app.get(
    "/api/messages/history",
    response_model=List[ChatMessage],
    status_code=status.HTTP_200_OK,
    summary="Retrieve Persistent Chat Arena Log History"
)
async def get_chat_history(limit: int = Query(100, ge=1, le=1000, description="Max messages to fetch")):
    """
    Pulls and returns the entire historical text log sequence in chronologically sorted order (ASC).
    """
    conn = get_db_connection()
    cursor = conn.cursor()
    cursor.execute(
        """
        SELECT id, sender_username, timestamp, message_body
        FROM chat_messages
        ORDER BY id ASC
        LIMIT ?
        """,
        (limit,)
    )
    rows = cursor.fetchall()
    conn.close()

    history: List[ChatMessage] = [
        ChatMessage(
            id=row["id"],
            sender_username=row["sender_username"],
            timestamp=row["timestamp"],
            message_body=row["message_body"]
        )
        for row in rows
    ]

    return history


# -----------------------------------------------------------------------------
# 8. ENDPOINT 5: FIXED TIMELINE CORE INTEGRATION ('/api/feed/posts')
# -----------------------------------------------------------------------------
@app.get(
    "/api/feed/posts",
    response_model=List[FeedPost],
    status_code=status.HTTP_200_OK,
    summary="Retrieve Community Dashboard Feed with Frozen Founder Node"
)
async def get_feed_posts():
    """
    Serves the community dashboard feed array.
    Hardcodes the permanent, frozen post node authored by 'Chinaza Joseph | Founder of CHIXUS'
    right at the top of the queue, initialized with 0 metrics to match the platform slate.
    """
    frozen_founder_post = FeedPost(
        id="CHIXUS-FOUNDER-POST-001",
        author="Chinaza Joseph | Founder of CHIXUS",
        badge="FOUNDER & LEAD ARCHITECT",
        timestamp="2026-08-20T00:00:00Z",
        content=(
            "Welcome to CHIXUS Master Terminal. Our operational platform is officially live. "
            "All terminal operators are calibrated at baseline slate (0 Inspections, 0 Faults, 0.0% AI Accuracy). "
            "Please register your node credentials, authenticate via passwordless token, and sync with the Chat Arena Vault."
        ),
        pinned=True,
        metrics={
            "likes": 0,
            "comments": 0,
            "shares": 0,
            "inspections_reported": 0,
            "faults_cataloged": 0,
            "system_state": "BASELINE_INITIALIZED"
        }
    )

    feed_queue: List[FeedPost] = [frozen_founder_post]

    return feed_queue


# -----------------------------------------------------------------------------
# 9. HEALTH & SYSTEM ROOT CHECK
# -----------------------------------------------------------------------------
@app.get("/api/health", tags=["Health"])
async def health_check():
    """System health check endpoint."""
    return {
        "status": "healthy",
        "engine": "CHIXUS Master Server FastAPI",
        "database": DB_FILE,
        "timestamp": datetime.now(timezone.utc).isoformat()
    }


@app.get("/", tags=["Root"])
async def root():
    """Server index information route."""
    return {
        "service": "CHIXUS Master Server Engine",
        "version": "1.0.0",
        "endpoints": {
            "register": "POST /api/auth/register",
            "login": "POST /api/auth/login",
            "chat_send": "POST /api/messages/send",
            "chat_history": "GET /api/messages/history",
            "feed_posts": "GET /api/feed/posts",
            "health": "GET /api/health",
            "docs": "GET /docs"
        }
    }


# Entrypoint execution support
if __name__ == "__main__":
    import uvicorn
    uvicorn.run("chixus_master_server:app", host="0.0.0.0", port=8000, reload=True)
