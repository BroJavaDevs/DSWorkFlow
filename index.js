const http = require("http");
const fs = require("fs");

const PORT = 8080;

var server = http.createServer((req, res) => {
  if (req.url == "/") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("./index.html");
    res.end();
  }
});

server.listen(PORT);
