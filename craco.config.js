const path = require('path')
const resolve = dir => path.resolve(__dirname, dir)
const webpack = require('webpack')
const dayjs = require('dayjs')
const { whenDev } = require('@craco/craco')
const sassResourcesLoader = require('craco-sass-resources-loader')
// const CracoLessPlugin = require('craco-less')
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')
const AntdDayjsWebpackPlugin = require('antd-dayjs-webpack-plugin')
const CompressionWebpackPlugin = require('compression-webpack-plugin')
const CircularDependencyPlugin = require('circular-dependency-plugin')
const WebpackBar = require('webpackbar')

const IS_PROD = ['production'].includes(process.env.NODE_ENV)
const analysis = ['analysis'].includes(process.env.REACT_APP_ENV)
const productionGzipExtensions = /\.(js|css|json|txt|html|ico|svg)(\?.*)?$/i
const currentVersion = `${dayjs().format('YYYYMMDD.HHmmss')}`

module.exports = {
  plugins: [
    // antd自定义主题, 暂且不用
    // {
    //   plugin: CracoLessPlugin,
    //   options: {
    //     lessLoaderOptions: {
    //       lessOptions: {
    //         modifyVars: { '@primary-color': '#1DA57A' },
    //         javascriptEnabled: true,
    //       },
    //     },
    //   },
    // },

    // 添加sass全局变量
    {
      plugin: sassResourcesLoader,
      options: {
        resources: [
          './src/assets/sass/mixin.scss'
        ],
      },
    },
  ],
  webpack: {
    configure: (webpackConfig, { env, paths }) => {
      const plugins = [
        new webpack.DefinePlugin({
          'process.env.BUILD': JSON.stringify(currentVersion),
        }),

        // 打包进度条
        new WebpackBar({
          profile: true,
          name: process.env.REACT_APP_NAME
        }),

        // Antd时间插件转换，用dayjs替换moment
        new AntdDayjsWebpackPlugin(),

        ...whenDev(
          () => [
            // 开发模式下检查包循环引用
            new CircularDependencyPlugin({
              exclude: /node_modules/,
              include: /src/,
              failOnError: true,
              allowAsyncCycles: false,
              cwd: process.cwd()
            })
          ], []
        ),
      ]

      if (analysis) {
        // 打包分析
        plugins.push(new BundleAnalyzerPlugin())
      }

      if (IS_PROD) {
        // 不生成 sourcemap
        webpackConfig.devtool = false

        // 实现Gzip压缩, 提高加载速度
        plugins.push(new CompressionWebpackPlugin({
          filename: '[path].gz[query]',
          algorithm: 'gzip',
          test: productionGzipExtensions,
          threshold: 10240,
          minRatio: 0.8
        }))
      }

      webpackConfig.plugins = [...webpackConfig.plugins, ...plugins]
      
      // 去掉垃圾报警
      webpackConfig.ignoreWarnings = [
        ...(webpackConfig.ignoreWarnings || []), 
        /Failed to parse source map/
      ]
      return webpackConfig
    },
    // 配置别名,可以直接从根目录下面开始查找文件
    alias: {
      '@': resolve('src'),
      '@http': resolve('src/api/http.js')
    }
  },
  // jest: {
  //   babel: {
  //     addPresets: true,
  //     addPlugins: true,
  //   },
  //   configure: (jestConfig, { env, paths, resolve, rootDir }) => {
  //     console.log('jestConfig::', jestConfig)
      
  //     return jestConfig
  //   },
  // },
}