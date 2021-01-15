const Koa = require('koa')
const path = require('path')
// 常用的模块之koa-static 处理静态资源

const static = require('koa-static')

const app = new Koa()

const staticPath = './static'

//即可直接通过'./static'，访问到静态资源
app.use(static(
    path.join(__dirname, staticPath)
))

app.use(async (ctx) => {
    ctx.body = 'hello world 访问静态资源'
})

app.listen(3000, () => {
    console.log('static-use-middleware is starting at port 3000')
})

// 如果网站提供静态资源（图片、字体、样式表、脚本......），为它们一个个写路由就很麻烦，也没必要。koa-static模块封装了这部分的请求。

// http://localhost:3000/test.js  在地址栏输入这样，就可以访问test.js的内容