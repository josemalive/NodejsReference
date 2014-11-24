var eventEmitter=require('events').EventEmitter;

eventEmitter=new eventEmitter();

module.exports=eventEmitter;
setTimeout(function(){

  module.exports.emit('ready');

}, 1000);





