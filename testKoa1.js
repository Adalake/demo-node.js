const Koa = require('koa');
const app = new Koa();
// 常用的模块之koa-bodyparser
const bodyParser = require('koa-bodyparser'); //解析请求体

app.use(bodyParser());

app.use(async (ctx) => {
    if (ctx.url === '/' && ctx.method === 'GET') {
        //显示表单页面
        let html = `
            <h1>Koa2 request POST</h1>
            <form method="POST" action="/">
                <p>userName</p>
                <input name="userName" /><br/>
                <p>age</p>
                <input name="age" /><br/>
                <button type="submit">submit</button>
            </form>
        `;
        ctx.body = html;
    } else if (ctx.url === '/' && ctx.method === 'POST') {
        let postData = ctx.request.body;
        ctx.body = postData;
    } else {
        ctx.body = '<h1>404!</h1>';
    }
});

app.listen(3000, () => {
    console.log(' server is starting at port 3000');
});

// 实际开发中，返回给用户的网页往往都写成模板文件。我们可以让 Koa 先读取模板文件，然后将这个模板返回给用户。