/****
 * demo模块的route配置
****/
import { lazy } from 'react'
import homeRoutes from './main'

const Login = lazy(() => import(/* webpackChunkName: "demo" */ '@/pages/login'))
const Home = lazy(() => import(/* webpackChunkName: "demo" */ '@/pages/home'))

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