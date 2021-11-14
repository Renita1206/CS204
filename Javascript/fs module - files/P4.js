var c=require('fs')
c.appendFile('hello.txt','\nSomething is added',function(err,data){
	if(err)
		console.error(err)
	});