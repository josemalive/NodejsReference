var EventEmitter = require("../5.1 Emitting Events/EventEmitters");

//subscribe to event exposed by event emitter.
EventEmitter.on('ready', function(){
	console.log('event from ON ');
});
EventEmitter.addListener('ready',function(){
    console.log("event from addListener");
    
});