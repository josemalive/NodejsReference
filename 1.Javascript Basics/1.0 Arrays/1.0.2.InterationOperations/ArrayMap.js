//creates an array with few elements
var myArray = ['apple', 'samsung', 'nokia', 'blackberry', 'lg', 'acer', 'huawei', 'xiaomi', 'miuzu', 'alcatel'];
/************  Array.map function ******************/
console.log('/************  Array.map function ******************/');
var renderToScreen = function(item) {
    console.log(item);
};
myArray.map(renderToScreen);