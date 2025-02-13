import http = require("http");

const server = http.createServer((req, res) => {
  let data = "";

  const clientIP = req.socket.remoteAddress;
  console.log(`New connection from ${clientIP}`);

  req.on("data", (chunk) => {
    data += chunk;
    console.log(
      `From ${clientIP} taken ${chunk} at ${new Date(Date.now()).toUTCString()}`,
    );
  });
  req.on("end", () => res.end(data));
  req.on("close", () => {
    console.log(`Connection closed with client by IP ${clientIP}`);
  });
});

server.listen(3000);
