var
url = require('url'),
port = process.argv[2],
http = require("http");

http.createServer(function (req, resp) {
  var dat, datUx;

  resp.writeHead(200, {
    'Content-Type' : 'application/json'
  });

  if (req.method != 'GET')
    return resp.end('send me a GET\n');

  datUx = Date.parse((url.parse(req.url).query).split("=")[1]);
  dat = new Date(datUx);

  switch (url.parse(req.url).pathname) {
  case "/api/parsetime":
    resp.end(JSON.stringify({
        hour : dat.getHours(),
        minute : dat.getMinutes(),
        second : dat.getSeconds()
      }));
    break;
  case "/api/unixtime":
    resp.end(JSON.stringify({
        unixtime : datUx
      }));
    break;
  }
}).listen(port);
