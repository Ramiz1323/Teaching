# Day 04: Backend Architecture & REST API Design

## Key Architectural Principles
- **Separation of Concerns**: Keep `server.js` (process management, port binding) decoupled from `app.js` (middleware, route mounting, business logic).
- **HTTP Methods Mapping**:
  - `GET`: Retrieve resources (Idempotent, Safe)
  - `POST`: Create a new resource
  - `PUT` / `PATCH`: Update existing resource (Full vs Partial update)
  - `DELETE`: Remove resource

## Status Codes Quick Guide
| Status | Meaning | Typical Usage |
|---|---|---|
| **200** | OK | Successful GET, PUT, PATCH, or DELETE |
| **201** | Created | Successful POST creating a new resource |
| **400** | Bad Request | Client sent malformed or invalid body |
| **404** | Not Found | Target resource URL does not exist |
| **500** | Internal Server Error | Unexpected server side exception |
