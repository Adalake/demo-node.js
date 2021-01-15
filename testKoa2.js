const Koa = require('koa');
const Router = require('koa-router');
const app = new Koa();

// 常用的模块之koa-router
const router = new Router();

//实现 '/'、'/koa'两个路由层级
router
    .get('/', (ctx, next) => {
        ctx.body = "Index page";
    })
    .get('/koa', (ctx, next) => {
        ctx.body = "Koa page";
    })
    .get('/test', async (ctx) => { //设置相应的格式
        ctx.type = 'html';
        ctx.body = '<h1>hello world!</h1>';
    });

app
    .use(router.routes())
    .use(router.allowedMethods());

app.listen(3000, () => {
    console.log('starting at port 3000');
});

// Koa-router 是 koa 的一个路由中间件，它可以将请求的URL和方法（如：GET 、 POST 、 PUT 、 DELETE 等） 匹配到对应的响应程序或页面。

// 使用app.use方法加载main函数。

