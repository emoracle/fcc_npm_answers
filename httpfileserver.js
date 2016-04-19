var 
port = process.argv[2],
location = process.argv[3],
http = require("http"),
fs = require("fs");

http.createServer(function(req, resp){
    var rs = fs.createReadStream(location)
    rs.on("open", function(){
        rs.pipe(resp);
    });
    rs.on("error", console.log);
 resp.on("error", console.log);
}).listen(port);