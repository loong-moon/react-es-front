/****
 * 描述:route配置-导出所有route配置
 * 创建者:李克振
 * 日期:2021/04/30
****/
import demoRoutes from './demo' // 示例模块
import singlePage from './single-page' // 没有模块的单独页面，如首页等

import Layout from '@/pages/layout' // 布局页
import Login from '@/pages/login' // 登录页

export default [
  {
    key: 'index',
    path: '/',
    component: Login,
  },
  {
    key: 'layout',
    path: '/main',
    component: Layout,
    routes: [ // 传递到子路由的配置
      ...demoRoutes,
      ...singlePage,
    ]
  },
  {
    key: 'login',
    path: '/login',
    component: Login,
  },
]