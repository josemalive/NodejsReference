//creates an array with few elements
var myArray = [1, 2, 3, 4, 5];
/************  Array.map function ******************/
console.log('/************  Array.map function ******************/');
var TwoTimes = function(item) {
    return item*2;
};
var TwoTimesArray=myArray.map(TwoTimes);
console.log(TwoTimesArray);