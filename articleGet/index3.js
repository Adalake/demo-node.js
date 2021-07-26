// 实现：利用http module来展示html文件（使用fs和http module） 待续。。。
var http = require("http");
var express = require("express");
var app = express();
app.get("/", function (req, res) {
  var url = "http://www.baidu.com";
  http.get(url, function (response) {
    var html = "";
    response.on("data", function (data) {
      html += data;
    });
    response.on("end", function () {
      // res.render("test", {
      //   html: html,
      // });
      res.send(html);
    });
  });
});

var server = app.listen(8082, function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log("应用实例，访问地址为 http://%s:%s", host, port);
});
