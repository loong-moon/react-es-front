const proxy = require('http-proxy-middleware')

module.exports = function (app) {
  app.use(
    '/api',
    proxy.createProxyMiddleware({
      // target: 'http://localhost:3100', // mock服务
      target: 'http://localhost:3300', // json-server
      pathRewrite: {
        '^/api': '', // rewrite path
      },
    })
  )
}