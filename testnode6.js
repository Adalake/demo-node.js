// 使用 Node 创建 Web 客户端
// testnode5.js和testnode6.js和index.html是一组例子

var http = require('http');

// 用于请求的选项
var options = {
    host: 'localhost',
    port: '3000', // 服务端在3000端口运行
    path: '/index.html'  //客户端去请求这个文件
};

// 处理响应的回调函数
var callback = function (response) {
    // 不断更新数据
    var body = '';
    response.on('data', function (data) {
        body += data;
    });

    response.on('end', function () {
        // 数据接收完成
        console.log(body,'我是客户端，服务端监听我的请求');
    });
}
// 向服务端发送请求
var req = http.request(options, callback);
req.end();

