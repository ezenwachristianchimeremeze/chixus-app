import os
import uvicorn
from app import app  # Imports your existing 50-feature FastAPI backend engine

if __name__ == "__main__":
    port = int(os.environ.get("PORT", 10000))
    uvicorn.run(app, host="0.0.0.0", port=port)
