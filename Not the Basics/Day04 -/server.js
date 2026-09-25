/**
 * Server Entry Point - Day 04
 * ----------------------------
 * Separation of Concerns (SoC):
 * 1. server.js is solely responsible for spinning up the HTTP server and port binding.
 * 2. src/app.js handles application configuration, middleware, and route definitions.
 */

const app = require('./src/app.js');
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
