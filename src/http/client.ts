import http = require("http");

const options = { host: "localhost", port: 3000, method: "POST" };

const req = http.request(options, (res) => {
  const startTime = Date.now();

  res.on("data", (chunk) => {
    const endTime = Date.now();
    console.log("Server response:", chunk.toString());
    console.log(`Response time: ${endTime - startTime} ms`);
  });
});

req.end("Text to server");
