import dgram = require("dgram");

const server = dgram.createSocket("udp4");

server.on("message", (msg, remoteInfo) => {
  console.log(
    `Received: ${msg.toString()} from ${remoteInfo.address}:${remoteInfo.port} at ${new Date().toUTCString()}`,
  );
  server.send(msg, remoteInfo.port, remoteInfo.address);
});

server.on("listening", () => {
  const address = server.address();
  console.log(`Server listening on ${address.address}:${address.port}`);
});

server.bind(3000, "127.0.0.1");
