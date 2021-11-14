var c=require('fs')
c.open('hello.txt','r+',function(err,data){
	if(err)
		console.error(err)
	else
		console.log("The file is\n"+data)
	});