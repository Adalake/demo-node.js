//第一个express实例
var express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.send('Hello World'); // res.send()：传送HTTP响应
})

var server = app.listen(8081, function () {

    var host = server.address().address
    var port = server.address().port

    console.log("应用实例，访问地址为 http://%s:%s", host, port)

})

// 使用 Express 可以快速地搭建一个完整功能的网站。

// Express 框架核心特性：

// 可以设置中间件来响应 HTTP 请求。

// 定义了路由表用于执行不同的 HTTP 请求动作。

// 可以通过向模板传递参数来动态渲染 HTML 页面。