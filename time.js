var
date,
port = process.argv[2],
net = require('net'),
server = net.createServer(function (socket) {
   
    socket.on("data", function (data) {
      console.log(data);
    });

    socket.on("close", function (data) {
        console.log(data);
    });
    
    date = new Date();
    socket.write([date.getFullYear(),lpad(date.getMonth()+1),lpad(date.getDate())].join("-") + " "+ [lpad(date.getHours()),lpad(date.getMinutes())].join(":") + "\n");
    socket.end();
  });
server.listen(port);
  
function lpad(n) {
  return ("00" + n).slice(-2);
}
