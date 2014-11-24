var http=require('http');

var makeRequest= function(regexToCapture){
 
   http.get("http://www.gamespot.com/feeds/reviews/", function(res){
      handleResponse(res, regexToCapture);
   });

};

var handleResponse = function(response,regexToCapture) {

  var htmlResponse = '';

  //for each chunk of data will be received...
  response.on('data', function (chunk) {

    console.log("datareceived");
    htmlResponse += chunk;

  });

  //after all has been received
  response.on('end', function (){
  //get each game and url
  //add into file "{game}:{score}" these games
   console.log(htmlResponse);
  });
  
}
makeRequest("<title>(.*)<\/title>");