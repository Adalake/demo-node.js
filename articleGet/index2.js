// 实现：爬取图片地址信息
const https = require("https");
var cheerio = require("cheerio");
let url = "https://www.baidu.com/";
https
  .get(url, (res) => {
    const { statusCode } = res;
    const contentType = res.headers["content-type"];
    console.log(statusCode, contentType);
    var t = "";
    res.on("data", (chunk) => {
      t = t + chunk;
      // console.log("数据改变了！", chunk.toString());
    });
    // 数据传输结束,所有数据都传输完毕之后触发
    res.on("end", () => {
      // 使用cheerio 分析数据的内容
      const $ = cheerio.load(t);
      $("img").each((index, el) => {
        console.log("图片" + index);
        console.log($(el).attr("src"));
      });
    });
  })
  .on("error", (e) => {
    console.error(`出现错误: ${e.message}`);
  });
