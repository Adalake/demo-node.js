// 实现：利用http module来展示html文件（使用fs和http module
// server端在接到http请求后，如何把用户所需的html文件展示出来：
var http = require("http");
var fs = require("fs"); //fs会帮助你访问你的file system

function onRequest(req, res) {
  res.writeHead(200, { "Content-Type": "text/html" }); //这里的类型要用html，使用plain会展示整个html文件。
  fs.readFile("./index3.html", null, function (error, data) {
    if (error) {
      res.writeHead(404);
      res.write("File not found!");
    } else {
      //fs正常打开文件，并将index3.html写入response中
      res.write(data);
    }
    res.end();
  });
}

http.createServer(onRequest).listen(8084);
