//Adding the keyword debugger, it will stop at this point, you can use following commands in order to control execution
/*
cont, c - Continue execution
next, n - Step next
step, s - Step in
out, o - Step out
pause - Pause running code 
*/
x = 5;
setTimeout(function () {
  debugger;
  console.log("world");
}, 1000);
console.log("hello");



