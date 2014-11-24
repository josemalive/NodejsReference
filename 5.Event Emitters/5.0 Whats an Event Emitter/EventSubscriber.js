var EventEmitter = require("./EventEmitters");

//subscribe to event exposed by event emitter.
EventEmitter.on('ready', function(){
	console.log('event captured');
});