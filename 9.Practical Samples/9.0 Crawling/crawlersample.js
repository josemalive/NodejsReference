//ENG: using the require for import the package simplecrawler
//SP : usamos el require para importar el modulo simplecrawler
var Crawler=require("simplecrawler");
//ENG: get the new instance of crawler object
//SP : obtenemos la instancia de el objeto que nos permitirá hacer el crawling 
var Crawler = require("simplecrawler");
var crawler = new Crawler("www.josematube.com");
crawler.initialProtocol = "http";
crawler.interval = 2000; 
crawler.maxConcurrency = 1;
crawler.on("fetchcomplete", function(queueItem, responseBuffer, response) {
    console.log("I just received %s (%d bytes)", queueItem.url, responseBuffer.length);
    console.log("It was a resource of type %s", response.headers['content-type']);
});
crawler.start();