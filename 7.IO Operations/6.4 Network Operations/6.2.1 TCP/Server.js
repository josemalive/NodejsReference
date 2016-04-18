var netModule=require('net');
var port=8181;

var manageConnections=function(connectionListener)
{
	connectionListener.setEncoding("utf-8");

	this.getConnections(function(err,count){

		if(err)
		{
			console.log("error getting current connections");
		}
		else
		{
			console.log("current connections number is :" + count +"-->"+ new Date().getTime());
		}

	});
	
	connectionListener.on("data", function(data){
		
		console.log("data received from client: " + data);
		connectionListener.write("hello from server");
	});

	connectionListener.on("error", function(error){

		console.log("An error ocurred on the server at connection level: " +  error)
	});
};

var server=netModule.createServer(manageConnections);

server.on("error",function(err){

	console.log("An error ocurred on the server:" + err);

});

server.listen(port);