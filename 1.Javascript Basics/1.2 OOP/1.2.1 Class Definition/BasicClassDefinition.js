// Constructor
function Animal(age) {
  // always initialize all instance properties
 	this.hasEnergy=true;
 	this.hasAge=true;
 	this.Age=age;
}
// class methods
Animal.prototype.getOld = function() {
	this.Age++;
	console.log(this.Age);
};
module.exports = Animal;