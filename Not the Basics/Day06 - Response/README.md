# Day 06: Express Response Handling & Routing Architecture

## RESTful Routing Overview
| Method | Route | Description |
|---|---|---|
| `POST` | `/notes` | Creates a note |
| `GET` | `/notes` | Retrieves all notes |
| `PATCH` | `/notes/:id` | Partially updates a note |
| `DELETE` | `/notes/:id` | Deletes note by ID |

## Best Practices
1. Always send appropriate HTTP status codes (`201` for creation, `200` for success, `400` for bad input, `404` for missing resource).
2. Keep response structure consistent with `success`, `message`, and `data` fields.
