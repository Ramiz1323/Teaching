const app = require("./src/app.js");
const http = require("http");
const { Server } = require("socket.io");
const PORT = process.env.PORT || 3000;

const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "*",
  },
});


io.use((socket, next) => {
    const token = socket.handshake.headers.authorization;
    if (token === "Ramiz") {
        next();
    } else {
        next(new Error("Unauthorized"));
    }
})

io.on("connection", (socket) => {
  console.log("Connected: ", socket.id);

  socket.emit("welcome", "Welcome to the server!");

  socket.on("message", (message, callback) => {
    if (typeof message !== "string" || !message.trim()) {
      if (typeof callback === "function") {
        callback({
          success: false,
          message: "Invalid Message Format",
        });
      }
      return;
    }

    io.emit("message", message);

    if (typeof callback === "function") {
      callback({
        success: true,
        message: "Message sent successfully",
      });
    }
  });

  socket.on("disconnect", (reason) => {
    console.log("Disconnected: ", socket.id, reason);
  });

  socket.on("error", (error) => {
    console.log("Error: ", socket.id, error);
  });
});

server.listen(PORT, () => {
  console.log("Server running on port 3000");
});
