var c=require('fs')
c.writeFile('hello.txt','So something is added',function(err,data){
	if(err)
		console.error(err)
	});