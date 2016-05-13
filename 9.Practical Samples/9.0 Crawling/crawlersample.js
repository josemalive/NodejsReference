//ENG: using the require for import the package simplecrawler
//SP : usamos el require para importar el modulo simplecrawler
var Crawler=require("simplecrawler");
//ENG: get the new instance of crawler object
//SP : obtenemos la instancia de el objeto que nos permitirá hacer el crawling 
var crawler=new Crawler("http://www.josematube.com");
//ENG: max concurrent requests
//SP : número máximo de peticiones concurrentes
crawler.maxConcurrency = 1;
//ENG: configure crawling interval every five seconds 
//SP : configuramos el intervalo de rastreo, cada 5 segundos
crawler.interval = 5000;  
//ENG: Maximum "depth" of crawling (1 means to crawl urls with the following pattern:     {protocol}:{hostname}/{folder})
//SP : Maxima "profundidad" de rastreo (1 equivale a una url con el siguiente patron:     {protocol}:{hostname}/{folder})
crawler.maxDepth = 1;
//hook when response has been a Http 200 using a anonymous callback as a handler 
crawler.on("fetchcomplete", function(queueItem) {
    console.log("Completed fetching resource:", queueItem.url);
});


