## 这个文件夹是关于node.js的例子,包括Express,Koa

## 参考：https://www.runoob.com/nodejs/nodejs-function.html

## 每个js文件都是可执行的，我用的是3000端口。注意看端口号有没有被占用。
## 1. npm install 2. eg: node testKoa.js 

## 更新：新增了一个文件夹，vue-ssr-demo，是一个最小单元的vue ssr项目。【没加vuex】

将vue项目部署到服务器：将 vue 打包生成的 dist 文件夹，托管为静态资源即可。通过node创建Web服务器。

关键代码如下：
const express = require('express') 
// 创建 web 服务器 
const app = express() 
// 托管静态资源 
app.use(express.static('./dist')) 
// 启动 web 服务器 
app.listen(80, () => { 
  console.log('web server running at http://127.0.0.1') 
})
