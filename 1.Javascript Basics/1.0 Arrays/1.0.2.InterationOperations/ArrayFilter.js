//creates an array with few elements
var myArray = ['apple', 'samsung', 'nokia', 'blackberry', 'lg', 'acer', 'huawei', 'xiaomi', 'miuzu', 'alcatel'];


/*********** Array.filter function *****************/
console.log('/************  Array.filter function ******************/');
var myNewArray = myArray.filter(function(arrayItem) { //returns an array that contains all elements of an array for which the provided filter anonymous function returns true
    if (arrayItem.indexOf('a') == 0) // item starts with 'a'
    {
        return true;
    }
    return false;
});
console.log(myNewArray); //render on console new array generated