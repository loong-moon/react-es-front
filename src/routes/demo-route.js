/****
 * demo模块的route配置
****/

import Home from '@/pages/home'
import Login from '@/pages/login'
import homeRoutes from './main'

const routes = [
  {
    key: 'null',
    path: '/',
    exact: true,
    redirect: '/home'
  },
  {
    key: 'home',
    path: '/home',
    component: Home,
    routes: homeRoutes,
  },
  {
    key: 'login',
    path: '/login',
    component: Login,
  },
]

export default routes