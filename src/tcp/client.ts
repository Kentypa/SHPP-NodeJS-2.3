import net = require("net");

let client = new net.Socket();
let startTime: number;

client.connect(3000, "127.0.0.1", function () {
  startTime = Date.now();
  client.write("Text to server");
});

client.on("data", function (data) {
  console.log("Received: " + data);
  let endTime = Date.now();
  console.log(`Response time: ${endTime - startTime}`);
  client.destroy();
});

client.on("close", function () {
  console.log("Connection closed");
});
