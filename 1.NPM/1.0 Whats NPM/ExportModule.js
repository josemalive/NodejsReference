// Constructor
function MyClass(myConstructorParam1,myConstructorParam2) {
  // always initialize all instance properties
  this.PropertyOne = myConstructorParam1;
  this.PropertyTwo = myConstructorParam2;
}
// class methods
MyClass.prototype.PrintParams = function() {
	console.log("Property One:"+this.PropertyOne);
	console.log("Property Two:"+this.PropertyTwo);
};
// export the class to be accessible from outside
module.exports = MyClass;