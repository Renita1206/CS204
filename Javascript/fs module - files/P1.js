var c=require('fs')
c.readFile('hello.txt',function(err,data){
	if(err)
		console.error(err)
	else
		console.log("The file is\n"+data)
	});