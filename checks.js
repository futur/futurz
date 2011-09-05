function myfun()
{
console.log("hello world");
}

var myfunc = (function()
{
myfun();
});

myfunc();

console.log(function (){
console.log("woo");
}());

var obj = new Object();
obj.a = "PREM";
console.log(obj.a);

var func = (function schedule(){
setTimeout(function(){
console.log("im in");
//schedule();
},2000);})
console.log("hey...")

var util = require('util');
util.log("its a log now");

var a = {1:true, 2: false};
util.log(util.inspect(a));

//util.log(util.inspect(util,1,2,1));

var b = new Buffer('prem kumar');
console.log(b.toString('utf8'));


var test = new Buffer(100);
for(var i=0;i<100;i++){
test[i] = i;
console.log(test[i]);
}
console.log( (function () {
var c = test.slice(40,60);
for(var i=0; i < c.length; i++)
console.log(c[i]);
})()
);

//util.log(test.toString());