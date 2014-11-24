console.log("Hello %s", "World");
console.log("Number of items: %d", 5);
console.info("Hello Info");
console.error("Hello on Stdout");
console.warn("Hello Warn");
var obj={name:"Hello", surname:"World"};
console.dir(obj);
console.time("1000-elements");
for(var i=0;i<1000;i++)
{
 a=1;
 a=a*i;

}
console.timeEnd("1000-elements");
console.trace("Hello from trace");
