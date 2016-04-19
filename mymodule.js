var fs = require('fs');
  
module.exports = function (dir, suffix, fn) {   
  fs.readdir(dir, function (err, list) {
    if (err) fn(err, null);
    for (var i = 0; i < list.length; i++) {
      if (list[i].indexOf("." + suffix) !== -1) 
      fn(null, list[i]);
  }
});
}