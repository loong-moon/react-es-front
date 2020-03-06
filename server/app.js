const Koa = require('koa')

const app = new Koa()

// // 跨域处理，当前端请求使用反向代理时不需要
// const corsHandle = require('./middleware/cors-handle')
// app.use(corsHandle())

// 请求body解析插件
const bodyParser = require('koa-bodyparser')
app.use(bodyParser())

// 初始化路由中间件
const router = require('./router/index')
app.use(router.routes()).use(router.allowedMethods())

app.listen(3100)
console.log('mock-server: http://localhost:3100')
