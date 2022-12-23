/****
 * 描述: 模拟服务-json-server启动
 * 创建者:李克振
 * 日期:2021/05/10
****/
const jsonServer = require('json-server')
const fs = require('fs')
const path = require('path')

const ip = '0.0.0.0'
const port = 3300
const rewriterConfig = require('./rewriter-config')

const paths = ['/test', '/user']

const server = jsonServer.create()
const middlewares = jsonServer.defaults()

// 加载默认中间件 (logger, static, cors and no-cache)
server.use(middlewares)


server.use(jsonServer.bodyParser)
server.use(jsonServer.rewriter(rewriterConfig))

// 加载路由
paths.forEach((item) => {
  server.use(item, (req, res) => {
    // router({ ...req, method: 'get' }, res, next)
    const url = req.path.endsWith('/') ? req.path.slice(0, -1) : req.path
    const filePath = path.join(__dirname, './data', item, `${url}.json`)
    // console.log(url, filePath, 'aaaaaaaaaaaaaaaaaaaaaa 加载路由')

    try {
      if (fs.existsSync(filePath)) {
        const responseData = fs.readFileSync(filePath, 'utf-8')
        res.jsonp(JSON.parse(responseData))
      } else {
        res.jsonp({
          statusCode: 500,
          message: `请在${filePath}下配置您的mock数据!`
        })
      }
    } catch (e) {
      res.jsonp({
        statusCode: 500,
        message: 'mock服务内部错误!'
      })
    }
  })
})

server.listen({
  host: ip,
  port
}, () => {
  console.log(`JSON Server is running in http://${ip}:${port}`)
})
