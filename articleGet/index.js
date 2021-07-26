// 实现：下载图片到image文件夹
var https = require("https");
var fs = require("fs");
var url =
  "https://img04.sogoucdn.com/net/a/04/link?url=http%3A%2F%2Fimg03.sogoucdn.com%2Fapp%2Fa%2F100520024%2F968013acbc34fa232b16607a4b519eab&appid=122";
https
  .get(url, (res) => {
    res.setEncoding("binary");
    var t = "";
    // on 用于添加回调函数（会在事件被触发时执行）。
    res.on("data", (chunk) => {
      t += chunk;
    });
    res.on("end", (chunk) => {
      // 异步地将数据写入文件
      fs.writeFile("./image/test.jpg", t, "binary", function (err) {
        if (err) {
          console.log("图片下载失败！", err);
        } else {
          console.log("图片下载成功！");
        }
      });
    });
  })
  .on("err", function (err) {
    if (err) {
      console.log("图片下载失败！");
    }
  });
