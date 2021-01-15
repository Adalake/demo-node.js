// Node.js 应用是由哪几部分组成的：
// 引入 required 模块：我们可以使用 require 指令来载入 Node.js 模块。
// 创建服务器：服务器可以监听客户端的请求，类似于 Apache 、Nginx 等 HTTP 服务器。
// 接收请求与响应请求 服务器很容易创建，客户端可以使用浏览器或终端发送 HTTP 请求，服务器接收请求后返回响应数据。

const http = require('http')
// import { createServer } from 'http'; //要上babel转译，不然直接运行这个文件会报错

const hostname = '127.0.0.1'
const port = 3000

// 这是es6
// const server = createServer((req, res) => {
//     res.statusCode = 200
//     res.setHeader('Content-Type', 'text/plain')
//     res.end('你好世界\n')
// })

// 引入http模块的createServer方法创建HTTP服务器
const server = http.createServer((req, res) => {
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/plain')
    res.end('hello world\n')
})

server.listen(port, hostname, () => {
    console.log(`服务器运行在 http://${hostname}:${port}/`)
})