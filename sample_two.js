var util = require('util');
var fs = require('fs');

var r = fs.createReadStream('checks.js');
r.on('data', function(data){
util.log(util.inspect(data));
console.log(data.toString());
});
r.on('end', function ()
{
console.log('end of file ----------------');
});

fs.stat('/etc/passwd',function(err,status)
{
  if(err) console.log('error reading...'+err);
  console.log(status);
}
);
