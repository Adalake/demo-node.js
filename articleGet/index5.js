// 实现：使用模板ejs
var express = require("express");
var app = express();
app.set("view engine", "ejs"); //此时我们就可以使用ejs模板了
app.engine('ejs', require('ejs').__express);
app.get("/", function (request, response) {
  response.render("index5", { name: "Andy" }); //这里的json object之后会在模板中用到
});

app.listen(8081, () => {});
