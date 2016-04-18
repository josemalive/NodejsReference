//require EventEmitterExtension file
var EventEmitterExtension = require("./EventEmitterExtension");
//create a new instance
EventEmitterExtension = new EventEmitterExtension();
//create a handler on "constructor_start" event to render on console 
EventEmitterExtension.on('constructor_start',function(){console.log("constructor_start");})
