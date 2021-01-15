var express = require('express');
var app = express();

// app.use('/public', express.static('public'));

app.get('/index1.html', function (req, res) {
    res.sendFile(__dirname + "/" + "index1.html");
    //res.sendFile()：传送指定路径的文件 -会自动根据文件extension设定Content-Type
})

app.get('/process_get', function (req, res) {
    // 输出 JSON 格式
    var response = {
        "first_name": req.query.first_name,
        "last_name": req.query.last_name
    };
    console.log(response);
    //用于快速结束没有任何数据的响应，使用res.end()。
    res.end(JSON.stringify(response));
    // res.send('哈哈哈返回了什么'); //res.send()：传送HTTP响应
})

var server = app.listen(8081, function () {

    var host = server.address().address
    var port = server.address().port

    console.log("应用实例，访问地址为 http://%s:%s", host, port)

})