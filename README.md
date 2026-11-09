# CHIXUS — Visual Fault Inspector (Prototype)

CHIXUS is an experimental application repository exploring an operator workspace and visual fault-inspection interface. The current codebase contains a React/Vite frontend, an Express/TypeScript service, and a FastAPI service with SQLite persistence.

**Project status: prototype / active development. This repository has not been independently verified as production-ready.** The UI, API routes, email delivery, authentication, database persistence, and deployment configuration must be tested together before any public deployment.

## Repository layout

The application source currently lives in the `chixus-app/` directory:

- `chixus-app/src/` — frontend source.
- `chixus-app/server.ts` — Express service and email integration.
- `chixus-app/main.py` — FastAPI service and SQLite schema.
- `chixus-app/requirements.txt` — Python service dependencies.
- `chixus-app/package.json` — Node.js scripts and dependencies.
- `chixus-app/render.yaml` — deployment configuration example.

## Frontend and Express service

    cd chixus-app
    npm ci
    npm run dev

Build and type-check:

    npm run build
    npm run lint

The package's `dev` script uses `tsx` to run the TypeScript server. Review the deployment start command before using it in a hosted environment.

## FastAPI service

In a separate terminal, from `chixus-app/`:

    python -m venv .venv
    source .venv/bin/activate
    pip install -r requirements.txt
    uvicorn main:app --host 127.0.0.1 --port 8000

Use local-only binding while developing. Configure the database location with `CHIXUS_DB_FILE` if required.

## Configuration

Email delivery must be configured through environment variables. The TypeScript service supports `SMTP_USER`, `SMTP_PASS`, `SMTP_FROM`, and optional `SMTP_BACKUP_USER`, `SMTP_BACKUP_PASS`, and `SMTP_BACKUP_FROM`. The Python service supports `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASSWORD`, and `SMTP_SENDER`.

Never commit provider passwords, app passwords, API keys, session secrets, database files, user exports, or real operator records. Use a local `.env` file that is excluded from Git or your hosting provider's secret manager.

## Security and verification status

- A legacy admin data-export route has been disabled.
- SMTP credentials are read from environment variables; no credential should be embedded in source code.
- Operator-token and recipient details should not be written to application logs.
- The authentication and authorization model still needs a dedicated security review. Do not assume that route existence means a route is protected.
- CORS, session handling, account ownership, data access, input validation, rate limiting, email delivery, and deployment configuration require end-to-end tests.
- Do not use real personal data in the repository or sample database.

## Contribution workflow

1. Create a branch for each change.
2. Keep frontend, API, and persistence changes scoped and documented.
3. Add tests for changed behavior.
4. Run the frontend build and type-check plus the FastAPI test suite.
5. Document any unverified provider integration or deployment dependency.

## Author

**Ezenwa Christian Chimeremeze**

- [GitHub](https://github.com/ezenwachristianchimeremeze)
- [LinkedIn](https://www.linkedin.com/in/ezenwa-christian-chimeremeze-b77115440)
- [Medium](https://ezenwachristianchimeremeze.medium.com/)
