/****
 * 静态服务启动文件，请求会被代理到相应的服务器，路由请求会直接返回首页
****/

const Koa = require('koa')
const fs = require('fs')
const path = require('path')
const staticServer = require('koa-static')

const app = new Koa()

// 静态服务
const staticPath = path.join(__dirname, '../build')
app.use(staticServer(staticPath))

// 代理请求,需放在body解析之前
const proxyConfig = require('./conf/proxy-config')
const httpProxy = require('./middleware/http-proxy')
app.use(httpProxy(proxyConfig))

// 始终返回首页，用于处理浏览器中直接输入的路由请求
app.use(ctx => {
  ctx.body = fs.readFileSync('./build/index.html', 'utf8')
})

app.listen(3200)
console.log('mock-server: http://localhost:3200')
