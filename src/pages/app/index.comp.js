/****
 * 描述:根组件
 * 创建者:李克振
 * 日期:2021/05/10
****/

import React, { 
  Suspense, 
  useEffect,
  useState,
} from 'react'
import PropTypes from 'prop-types'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom'
import { useMount } from 'ahooks'

import { 
  Loading,
} from '@/components'
import NoPermission from '@/pages/error-page/no-permission'

import routes from '@/routes'
import '@/assets/sass/app.scss'


const defaultPaths = ['/', '/login', '/main']

// 渲染route
function renderRoute (route) {
  const { routes, component, ...rest } = route
  const Element = component
  
  let routeComp = <Route 
    element={
      <Suspense fallback={<Loading />}>
        <Element />
      </Suspense>
    } 
    {...rest} />

  if (routes) {
    routeComp = <Route
      element={
        <Suspense fallback={<Loading />}>
          <Element />
        </Suspense>
      } 
      {...rest}>
      { routes.map(route => renderRoute(route)) }
    </Route>
  }

  return routeComp
}

function App (props) {
  const { getMenuList, permissionPaths } = props

  // 权限状态
  const [hasPermission, setHasPermission] = useState(null)

  useMount(() => {
    if (permissionPaths.length === 0) {
      getMenuList()
    }
  })

  useEffect(() => {
    const paths = [...defaultPaths, ...permissionPaths]
    if (paths.includes(location.pathname)) {
      setHasPermission(true)
    } else {
      setHasPermission(false)
    }
    // console.log(location.pathname, paths, 'aaaaaaaaaaaaaaaaa 当前路由')
  }, [permissionPaths])
  
  let pageEl = null
  if (hasPermission === true) {
    pageEl = (
      <Router>
        <Routes>
          {routes && routes.map(route => renderRoute(route))}
        </Routes>
      </Router>
    )
  } else if (hasPermission === false) {
    pageEl = <NoPermission />
  }
  
  return (
    <div className="app">
      {pageEl}
    </div>
  )
}

// 参数类型验证
App.propTypes = {
  getMenuList: PropTypes.func, // 获取菜单
  permissionPaths: PropTypes.array, // 有权限的菜单路径
}

export default App
