const http = require("http");
const querystring = require("querystring");
const urlData = require("url");
const fs =require("fs");


http.createServer(function(request,response){
     var json = urlData.parse(request.url,true);
     console.log(json);
}).listen(8080);