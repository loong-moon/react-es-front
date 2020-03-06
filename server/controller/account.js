/**
 * 账户功能-控制器  路由处理函数，返回数据可以从服务端、sql查询、mock来，目前只实现mock数据
 */

const account = require('../mock-data/account')

module.exports = {

  // 登录路由控制器
  login (ctx) {
    ctx.body = account.loginMockData
    // ctx.throw(400, 'name required', { user: 'user' })
    console.log(ctx.url, ctx.status, '/login')
  },

}
