var netModule=require('net');
var port=8181;
var host='127.0.0.1';

var connectionHandler=function(){

	console.log("Getting server connection");

};

var connection=netModule.createConnection(port,host,connectionHandler);

connection.setEncoding("utf-8");

connection.on("connect", function(){

	console.log("connection stablished with the server:"+ new Date().getTime() );

	console.log("Sending some bits to the server");

	connection.write("Hello world from client");

});

connection.on("data", function(data){

	console.log("receiving data from server :" + data);

});

connection.on("error", function(error){

	console.log("An error ocurred on the client: "+error);

});

connection.on("end",function(){

	console.log("connection lost");

});