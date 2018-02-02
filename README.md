# nodejs

开始学习nodejs

## 一 nodejs入门

### 1.1 第一个nodjs文件

   学习如何运行nodejs文件：<br/>
   
   在命令提示行中，首先进入文件所在目录然后输入下列命令：node 文件名称，就可以运行。 <br />

### 1.2 练习创建一个服务器
   第一步 引入“http”模块，语法是:
   > const http = require("http");
   
   第二步 使用http模块中的createServer方法创建一个服务器，该方法接收一个回调函数，回调函数中包含两个参数：
   > 第一个参数request,表示接收的参数，第二个参数response,表示返回的参数
   
   第三步 为保持服务器持续不断运行，需要进行监听，调用服务器的listen方法。下面为详细代码
   > var server = http.createServer(function(request,response){});
   > server.listen(8080);//8080为端口号。
   
   第四步 文件的读写 <br />
   1.在服务器中引入file system模块
   > const fs = require("fs");
       
   2.fs模块中的两个方法readFile,writeFile
   > readfile方法读取文件，该方法接受两个参数，第一个参数表示要读取的文件所在的地址，第二个参数是一个回调函数，该回调函数接收两个参数，第一个参数表示错误信息，第二个是返回的文件数据。

   > writeFile方法写入文件，该方法有三个参数，第一个是想要写入数据文件的地址，第二个是写入数据的内容，第三个是一个回调函数，该回调函数有一个参数，该参数表示错误信息。
       
   3.fs模块中的end方法，表示文件读取完成。 
   
