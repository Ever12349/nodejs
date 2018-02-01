const http = require("http");
const fs = require("fs");
var server = http.createServer(function(resquest,response){
    var url = resquest.url;
    var address = "./www"+url; //文件地址
    fs.readFile(address,function(error,data){
    	if(error){
    		response.write("404");
    	}else{
    		response.write(data);
    	}
    	response.end();
    })

	
});

//监听--程序一直在运行不中断
server.listen(8080); //端口为8080
