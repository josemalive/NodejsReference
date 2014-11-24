Installation

$ npm install -g node-inspector

Usage

$ node-debug app.js


Finally I read about Strong Loop’s Node Inspector in Node.js In Action. It is an npm module you install globally after which you are able to run your app with the node-debug command:



node-debug server.js

After that you hit in Chrome

http://localhost:8080/debug?port=5858

And after a bit of a delay you see  the awesome, familiar debugger from Dev tools which we all love debugging our client-side JS with. This debugger is my favorite I’ve ever used, it is highly usable yet light on the CPU and RAM. I know it almost sounds too good to be true, but voila:Screen Shot 2014-04-23 at 9.32.21 PM

As you can see here, I’m debugging Express code in Dev Tools, I’m paused on a breakpoint in an Express controller, I have my watch expressions, my call stack and my scope vars available. So Awesome.

A bit of a caveat, unlike with client-side JS code which you debug by right clicking and popping the dev tools in the same tab – to debug node like this, you have to have another tab open where you are hitting your project at its default location as set in the node env config – in my case localhost:3000. At first when I launch this debug mode in terminal it takes a while for the actual node server on 3000 to launch. Then the tab which hits localhost:8080 itself takes a bit to load and finally it ends up paused so you wonder where your server is as nothing opens on 3000. I have to unpause the debugger’s initial break, then wait a second and hit localhost:3000 in another tab and everything starts functioning smoothly from then on. Here is a link to a video of the process, but it’s a bit outdated and it seems to go a lot more smoothly for him, not me, not sure why.

There you have it, these seem to be the best options for debugging Node.js at the moment and my favorite ones are the 1st – console and the last – Node Inspector, depending on the complexity of the issue I’m trying to resolve.