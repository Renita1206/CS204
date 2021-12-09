var http=require('http');
var url=require('url');
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
//database creation
MongoClient.connect(url, function(err,db) {
if (err) throw err;
var dbo=db.db('mydb');
var myobj = [{_id:01, "hsp_name":"Apollo","hsp_dept": "Cardiology","hsp_timings":"8-11"},
{_id:02, "hsp_name":"Columbia Asia","hsp_dept": "Neurology","hsp_timings":"8-7"},
{_id:03,"hsp_name":"Apollo","hsp_dept":"Oncology","hsp_timings":"9-10"},
{_id:04,"hsp_name":"Columbia Asia","hsp_dept":"Ortho","hsp_timings":"6-10"}];
dbo.collection('hospitals').insertMany(myobj,function(err,res) {
console.log(res);
fetched_data=[];
dbo.collection("hospitals").find({}).toArray((err,res)=>{
if (err) throw err;
fetched_data=res;
console.log(res);
console.log("Collection created!");
db.close();
});
});
});
//server creation
http.createServer((request,response)=>{
response.writeHead(200,{'Content-Type':'text-plain'});
response.end(fetched_data.toString());
response.end("hello");
}).listen(8081);