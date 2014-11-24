There always comes, though, the time when what you’re doing becomes so complex it makes your head spin you need a real debugger with the ability to break so you can take a breath, scratch your head and think a bit.  Node actually ships with such a debugger built in which is quite cool. You can activate it by running a file with a debug option

node debug server.js

and then you use a combination of commands in your code and commands in terminal to break, resume etc. You pause where you want use the debugger command in your js code:

 // myscript.js
x = 5;
setTimeout(function () {
  debugger;
  console.log("world");
}, 1000);
console.log("hello");
And then you are able to step through the code in your terminal by using the following commands:

cont, c - Continue execution
next, n - Step next
step, s - Step in
out, o - Step out
pause - Pause running code (like pause button in Developer Tools)