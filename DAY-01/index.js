const http = require("http");
const fs = require ("fs");

const webserver = http.createServer((req, res) => {
  const log = `${Date.now()}: new request Recieved from ${req.socket.remoteAddress} \n`;
  fs.appendFile("log.txt", log, (err,data) =>{
    res.end("Hello from the server");
  });
 
  
})
webserver.listen(8000, () => console.log("Server Started!"));


