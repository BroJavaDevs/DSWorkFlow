const http = require("http");
const fs = require("fs");
const path = require("path");

const PORT = 8080;

var server = http.createServer((req, res) => {
  if (req.url == "/") {
    // Read the content of the HTML file
    fs.readFile(path.join(__dirname, "index.html"), "utf8", (err, content) => {
      if (err) {
        res.writeHead(500, { "Content-Type": "text/plain" });
        res.end("Internal Server Error");
        return;
      }

      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(content);
      res.end();
    });
  }
});

server.listen(PORT, "localhost");
