import dgram = require("dgram");

const client = dgram.createSocket("udp4");
const message = Buffer.from("Text to server");
let startTime: number;

client.send(message, 3000, "127.0.0.1", () => {
  startTime = Date.now();
});

client.on("message", (msg) => {
  const endTime = Date.now();
  console.log(`Received: ${msg.toString()}`);
  console.log(`Response time: ${endTime - startTime} ms`);
  client.close();
});

client.on("close", () => {
  console.log("Client socket closed");
});
