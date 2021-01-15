//GET方法 显示所有用户列表
var express = require('express');
var app = express();
var fs = require("fs");

app.get('/listUsers', function (req, res) {
    //fs.readFile() 文件系统，读取文件
    fs.readFile(__dirname + "/" + "users.json", 'utf8', function (err, data) {
        console.log(data);
        res.end(data);
    });
})

var server = app.listen(8081, function () {

    var host = server.address().address
    var port = server.address().port

    console.log("应用实例，访问地址为 http://%s:%s", host, port)

})
// Node.js 文件系统（fs 模块）模块中的方法均有异步和同步版本，例如读取文件内容的函数有异步的 fs.readFile() 和同步的 fs.readFileSync()。
// 异步的方法函数最后一个参数为回调函数，回调函数的第一个参数包含了错误信息(error)。
// 建议大家使用异步方法，比起同步，异步方法性能更高，速度更快，而且没有阻塞。