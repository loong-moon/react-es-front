/****
 * 描述:route配置-没有划分模块的单独页面
 * 创建者:李克振
 * 日期:2021/04/30
****/
// import { lazy } from 'react'

import Home from '@/pages/home'

const routes = [
  {
    key: 'home',
    path: '/main/home',
    component: Home,
    index: true
  },
]

export default routes