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

console.log(io.of("/").adapter.constructor.name);
 
io.on("connection", (socket) => {
  console.log("Connected: ", socket.id);

  socket.on("joinRoom", (room) =>{
    socket.join(room);
    socket.emit("joined", `You joined ${room}`)
  })

  socket.on("sendToRoom", ({room, message}) =>{
    socket.to(room).emit("message", message)
  })

});

server.listen(PORT, () => {
  console.log("Server running on port 3000");
});
