//require needed for use an example of event emiters
var EventEmitter = require("./EventEmitters");

//subscribe to event exposed by event emitter.
EventEmitter.on('ready', function(){
	console.log('ready captured');
});
//subscribe to event exposed by event emitter.
EventEmitter.once('onlyonce', function(){
	console.log('onlyonce captured');
});
