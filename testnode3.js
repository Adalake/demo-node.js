// 执行get请求
const https = require('https')
const options = {
  hostname: 'nodejs.cn',
  port: 3000,
  path: '/todos',
  method: 'GET'
}

const req = https.request(options, res => {
  console.log(`状态码: ${res.statusCode}`)

  res.on('data', d => {
    process.stdout.write(d)
  })
})

req.on('error', error => {
  console.error(error)
})

req.end()