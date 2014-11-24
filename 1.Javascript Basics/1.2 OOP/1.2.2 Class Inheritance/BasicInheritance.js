//Import animal definition
var Animal = require("../1.2.1 Class Definition/BasicClassDefinition");
//Import util required for inheritance
var util = require("util");
//class creation
function Dog(age)
{
	//call to Animal base constructor passing params
	 Animal.call(this, age);
}
//Tell to engine that Dog inherits from Animal
util.inherits(Dog, Animal);
//create a new instance of dog
var dogInstance = new Dog(50);
//call getOld defined on base class 10 times
for(i=0;i<10;i++)
{
	//call inherited method
	dogInstance.getOld();
}

