# Teaching Notes & Best Practices Summary

## Engineering Best Practices Recap

1. **Architecture & Clean Code**:
   - Keep application setup (`app.js`) isolated from server network listeners (`server.js`).
   - Group business logic inside Controllers and mount routes cleanly in Router files.
2. **Database Modeling**:
   - Always enforce validation rules at the schema level (`required`, `maxlength`, `enum`, `trim`).
   - Add `timestamps: true` to track record creation and updates.
   - Use pre-save hooks to sanitize inputs before writing to MongoDB.
3. **API Reliability**:
   - Return appropriate HTTP status codes:
     - `200 OK`, `201 Created`
     - `400 Bad Request`, `404 Not Found`
     - `500 Internal Server Error`
   - Wrap responses in consistent JSON structures with `success`, `message`, and `data`.
