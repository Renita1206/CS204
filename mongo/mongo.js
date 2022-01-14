var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost/Ice';
MongoClient.connect(url,function(err,db){
if(err) throw err;
var db1=db.db("icecream");
var obj = {name:"Hannah", age:"29"};
//db1.createCollection("bourbon",function(err,res){
//db1.collection("bourbon").insertMany(obj,function(err,res){
db1.collection("bourbon").find(obj).toArray(function(err,res){    
if (err) throw err;
//console.log("Documents inserted"+ res.insertedCount);
console.log(res);
db.close();
});
});