import net = require("net");

let server = net.createServer(function (socket: net.Socket) {
  let data: string = "";

  console.log(`Client connected: ${socket.remoteAddress}`);

  socket.on("data", function (chunk) {
    data += chunk;
    console.log(
      `Received ${data} at ${new Date(Date.now()).toUTCString()} from ${socket.remoteAddress}`,
    );
  });

  socket.on("close", function () {
    console.log("Client socket closed");
  });

  socket.write(data);
  socket.pipe(socket);
});

server.listen(3000, "127.0.0.1");
