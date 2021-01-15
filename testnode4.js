// node.js的get请求
var http = require('http');
var url = require('url');
// var util = require('util');
 
http.createServer(function(req, res){
    res.writeHead(200, {'Content-Type': 'text/plain'});
 
    // 解析 url 参数
    var params = url.parse(req.url, true).query;
    res.write("web name:  " + params.name);
    res.write("\n");
    res.write("web URL:  " + params.url);
    res.end();
 
}).listen(3000);

// 地址栏：http://localhost:3000/user?name=lake&url=www.lake.com