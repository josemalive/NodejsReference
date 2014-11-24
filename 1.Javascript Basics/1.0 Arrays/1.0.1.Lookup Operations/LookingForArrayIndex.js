var myArray=['car','apple','glass']; //creates an array with three items.
myArray.unshift('apple') //adds another "apple" element at the beginning of the array
//IndexOf function returns the lowest position of an element where the value is located (starting from 0), if no value returns -1
console.log(myArray.indexOf('apple')); // Will render 0.
//lastIndexOf function returns the greatest position of an element where the value is located (starting from 0), if no value returns -1
console.log(myArray.lastIndexOf('apple')); // Will render 2.