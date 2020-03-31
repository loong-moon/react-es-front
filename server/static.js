const Koa = require('koa')
const fs = require('fs')
const path = require('path')
const staticServer = require('koa-static')

const app = new Koa()

// 静态服务
const staticPath = path.join(__dirname, '../build')
app.use(staticServer(staticPath))

// 代理请求,需放在body解析之前
// 代理配置
const proxyConfig = require('./conf/proxy-config')
const httpProxy = require('./middleware/http-proxy')
app.use(httpProxy(proxyConfig))

// 请求body解析插件，用于处理有body的请求
const bodyParser = require('koa-bodyparser')
app.use(bodyParser())

// 加载路由中间件
const router = require('./router/index')
app.use(router.routes()).use(router.allowedMethods())

// 始终返回首页，用于处理浏览器中直接输入history模式的路由
app.use(ctx => {
  ctx.body = fs.readFileSync('./build/index.html', 'utf8')
})

app.listen(3200)
console.log('mock-server: http://localhost:3200')
