//show a message with a placeholder to put a string, output on stdout stream
console.log("Hello %s", "World");
//show a message with a placeholder to put an int output on stdout stream
console.log("Number of items: %d", 5);
//show a message with a placeholder to put a string output on stdout stream
console.info("Hello Info");
//show an error message output on stderr stream
console.error("Hello on Stdout");
//show an warn message output on stderr stream
console.warn("Hello Warn");
var obj={name:"Hello", surname:"World"};
//Uses util.inspect on obj and prints resulting string to stdout.
console.dir(obj);
//starts counting time
console.time("1000-elements");
for(var i=0;i<1000;i++)
{
 a=1;
 a=a*i;

}
//end tracking time
console.timeEnd("1000-elements");
//Print to stderr 'Trace :', followed by the formatted message.
console.trace("Hello from trace");
