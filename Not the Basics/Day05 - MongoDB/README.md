# Day 05: MongoDB & Mongoose Integration

## Overview
Mongoose provides a straight-forward, schema-based solution to model application data with MongoDB.

### Connection Lifecycle Events:
```javascript
mongoose.connection.on('connected', () => console.log('DB Connected'));
mongoose.connection.on('error', (err) => console.error('DB Error', err));
mongoose.connection.on('disconnected', () => console.log('DB Disconnected'));
```

### Troubleshooting Common Connection Issues:
1. Ensure the local `mongod` service is running or check your MongoDB Atlas URI.
2. Confirm correct default port (`27017`).
3. Verify network firewall rules and IP access when using cloud clusters.
