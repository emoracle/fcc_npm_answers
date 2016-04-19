var 
map = require('through2-map'),
port = process.argv[2],
http = require("http");

http.createServer(function(req, resp){
  if (req.method != 'POST')  
       return resp.end('send me a POST\n') ;
  
  req.pipe(map(function (chunk) {  
       return chunk.toString().toUpperCase();
     })).pipe(resp);
    
}).listen(port);