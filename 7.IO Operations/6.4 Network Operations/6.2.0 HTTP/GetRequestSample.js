var http=require('http');

var makeRequest= function(){
 
   http.get("http://www.gamespot.com/feeds/reviews/", function(res){
      handleResponse(res);
   });

};

var handleResponse = function(response) {

  var htmlResponse = '';

  //for each chunk of data will be received...
  response.on('data', function (chunk) {

    console.log("datareceived");
    htmlResponse += chunk;

  });

  //after all has been received
  response.on('end', function (){
  	console.log(htmlResponse);
  });
  
}
makeRequest();