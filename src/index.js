/****
 * 描述:总入口文件
 * 创建者:李克振
 * 日期:2021/04/30
****/

import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import * as serviceWorker from './serviceWorker'
import store from './store'

import { ConfigProvider } from 'antd'
import zhCN from 'antd/lib/locale/zh_CN'
import 'moment/locale/zh-cn'

import App from '@/pages/app'


ReactDOM.render(
  <ConfigProvider locale={zhCN}>
    <Provider store={store}>
      <App />
    </Provider>
  </ConfigProvider>, 
  document.getElementById('root')
)

// 项目编译版本显示
const version = {
  Environment: process.env.NODE_ENV,
  Platform: process.env.REACT_APP_NAME,
  Version: process.env.REACT_APP_VERSION,
  Build: process.env.BUILD
}
const versionConsole = (verObj) => {
  const part0 = 'padding: 1px; border-radius: 0 3px 3px 0; color: #fff; background:#20C03D;'
  const part1 = 'padding: 1px; border-radius: 3px 0 0 3px; color: #fff; background:#606060;'
  const part2 = 'padding: 1px; border-radius: 0 3px 3px 0; color: #fff; background:#0075AF;'
  console.log(`%c Environment %c ${verObj.Environment} `, part1, part0)
  delete verObj.Environment
  for (const key of Object.keys(verObj)) {
    console.log(`%c ${key} %c ${verObj[key]} `, part1, part2)
  }
}
versionConsole(version)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
