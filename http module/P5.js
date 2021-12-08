var s=require('http')
var ser=s.createServer(function(req,res){
res.write('hi');
res.write(req.url);
res.end();
}).listen(5000);
console.log('Running on port 5000')