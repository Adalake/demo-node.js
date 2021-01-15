// 简单的Koa例子
// 只要几行代码，就可以用 Koa 架设一个 HTTP 服务。
const Koa = require('koa');
const app = new Koa();

app.use(async ctx => {
  ctx.body = 'Hello World I am Koa'; //发送给客户的内容
});

app.listen(3000);