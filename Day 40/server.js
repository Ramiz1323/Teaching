const app = require("./src/app.js");
const { createServer } = require("http");
const { Server } = require("socket.io");

const httpServer = createServer(app);
const io = new Server(httpServer, { cors: { orgin: "*" } });

// Default NameSpace
io.on("connection", (socket) => {
  console.log("User Connected to Default : ", socket.id);
});

// CHAT NameSpace
const chat = io.of("/chat");
chat.on("connection", (socket) => {
  console.log("User Connected to /chat: ", socket.id);

  // Send to all clients connected to /chat including the sender
  // clients in /admin do not receive this event

  socket.on("message", (message) => {
    chat.emit("message", {
      sender: socket.id,
      message: message,
    });
  });

});

// ADMIN NameSpace
const admin = io.of("/admin");
admin.on("connection", (socket) => {
    console.log("Connected to /admin: ", socket.id);

    socket.on("message", (message) =>{ 
        admin.emit("message", {
            sender: socket.id,
            message: message
        })
    })
})

httpServer.listen(3000, () => {
  console.log("Socket.IO server is running on port 3000");
});
