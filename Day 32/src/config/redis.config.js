const redis = require('ioredis');

const redisClient = new redis(process.env.REDIS_URI);

redisClient.on("connect", () => {
    console.log("Connected to Redis");
});

redisClient.on("error", (err) => {
    console.error("Redis connection error:", err);
});

module.exports = redisClient;