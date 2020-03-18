const { 
  addWebpackAlias,
  override,
  adjustStyleLoaders
} = require('customize-cra')
const path = require('path')

module.exports = override(
  // 设置别名
  addWebpackAlias({ 
    '@': path.resolve(__dirname, 'src'),
    '@axios': path.resolve(__dirname, 'src/api/axios.js'),
  }),

  // 加载scss全局变量
  adjustStyleLoaders(rule => {
    if (rule.test.toString().includes('scss')) {
      rule.use.push({
        loader: require.resolve('sass-resources-loader'),
        options: {
          resources: './src/assets/sass/mixin.scss', // 公共scss变量的路径
        }
      })
    }
  })
)