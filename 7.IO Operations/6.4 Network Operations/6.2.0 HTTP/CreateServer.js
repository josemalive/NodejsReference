var http = require("http");
var server = http.createServer(function(request, response) {

  //parse request
  console.log("\r\nhost: "+request.host);
  console.log("\r\nhostName: "+request.hostname);
  console.log("\r\nlocalAddress: "+request.localAddress);
  console.log("\r\nsocketPath: "+request.socketPath);
  console.log("\r\nmethod: "+request.method);
  console.log("\r\npath: "+request.path);
  console.log("\r\nAuth: "+request.auth);
  console.log("\r\nAgent: "+request.agent);
  console.log('\r\nHeaders: ' + JSON.stringify(request.headers));
  //compose response
  response.writeHead(200, {"Content-Type": "text/html"});
  response.write("<html>");
  response.write("<head>");
  response.write("<title>Hello World</title>");
  response.write("</head>");
  response.write("<body>");
  response.write("Hello World");
  response.write("</body>");
  response.write("</html>");
  response.end();
});

server.listen(999);
console.log("Server ready for listening");