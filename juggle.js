var 
http = require('http'),
urls = process.argv.slice(2,process.argv.length), //copy the array
results = [],
count = process.argv.length - 2;

urls.map(function(url,i){
    http.get(url, function (res) {
      var buffer = "";
    
      res.setEncoding("utf8");
      res.on("data", function (data) {
        buffer += data;
      });
      
      res.on("end", function () {
        results[i] = buffer;
        count--;
        if (count === 0){
          results.map(function(a){console.log(a);});
        }
    });
  });
});