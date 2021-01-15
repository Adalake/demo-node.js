// 大多数 web 服务器都支持服务端的脚本语言（php、python、ruby）等，
// 并通过脚本语言从数据库获取数据，将结果返回给客户端浏览器。

// 目前最主流的三个Web服务器是Apache、Nginx、IIS。

// 以下是演示一个最基本的 HTTP 服务器架构(使用 3000 端口)
// 使用 Node 创建 Web 服务器

// testnode5.js和testnode6.js和index.html是一组例子

var http = require('http');
var fs = require('fs');
var url = require('url');


// 创建服务器
http.createServer(function (request, response) {
    // 解析请求，包括文件名
    var pathname = url.parse(request.url).pathname;

    // 输出请求的文件名
    console.log("Request for " + pathname + " received.");

    // 从文件系统中读取请求的文件内容
    fs.readFile(pathname.substr(1), function (err, data) {
        if (err) {
            console.log(err);
            // HTTP 状态码: 404 : NOT FOUND
            // Content Type: text/html
            console.log(1)
            response.writeHead(404, { 'Content-Type': 'text/html' });
        } else {
            // HTTP 状态码: 200 : OK
            // Content Type: text/html
            console.log(2,'我是服务端，我监听客户端的请求')
            response.writeHead(200, { 'Content-Type': 'text/html' });

            // 响应文件内容
            response.write(data.toString());
        }
        //  发送响应数据
        response.end();
    });
}).listen(3000);

// 控制台会输出以下信息
console.log('Server running at http://127.0.0.1:3000/');

// 地址栏： http://127.0.0.1:3000/index.html