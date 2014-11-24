/* Push and pop methods */
var myArray = ['1', '2', '3'];
myArray.push('4'); // insert the number 4 at the final
console.log(myArray); // Will render ['1', '2', '3', '4']
console.log(myArray.pop()); // Will remove the last item array ('4');
console.log(myArray); // [Will render ['1', '2', '3']
/* Shift and UnShift methods */
myArray.unshift('0'); // Will include '0' at the first position of the array
console.log(myArray); // Will render ['0','1', '2', '3']
console.log(myArray.shift()); // Will remove first item of the array
console.log(myArray); // Will render ['1', '2', '3']