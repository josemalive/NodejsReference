var eventEmitter=require('events').EventEmitter;

eventEmitter=new eventEmitter();

EmitEvent();

function EmitEvent()
{
	setTimeout(function(){

  	eventEmitter.emit('ready');
  	eventEmitter.emit('onlyonce');
  	EmitEvent();

	}, 3000);
}

module.exports=eventEmitter;







