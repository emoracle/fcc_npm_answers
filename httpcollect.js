var http = require('http');
http.get(process.argv[2], function(res) {
  res.setEncoding("utf8");
  var buffer = "";
  res.on("data",function(data){
      buffer+=data;
  });
  res.on("data",console.error);
  res.on("end",function(){
      console.log(buffer.length);
      console.log(buffer);
  })
});
