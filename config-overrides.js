const { 
  addWebpackAlias,
  override, 
} = require('customize-cra')
const path = require('path')

module.exports = override(
  // 设置别名
  addWebpackAlias({ 
    '@': path.resolve(__dirname, 'src'),
    '@axios': path.resolve(__dirname, 'src/api/axios.js'),
  })
)