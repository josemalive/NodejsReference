//require event emitter to be able to trigger events.
var EventEmitter=require('events').EventEmitter;
//include util "library" to be able to inherit from other class
var util=require('util');

function EventEmitterExtension(){
	//call event emitter class constructor
	EventEmitter.Call(this);
	//save this instance into self variable to use in timeout
	var self=this;
	//Call set timeout to give enough time to register the event for capture it after
	setTimeout(function(){
		self.emit('constructor_start');
	},0);
}
//specify that we inherit rfom Event emitter
util.inherits(EventEmitterExtension,EventEmitter)
//export class definition to be accesible from outside
module.exports=EventEmitterExtension