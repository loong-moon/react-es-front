/****
 * 显示routes的组件
****/
import React from 'react'
import {
  Route,
  Redirect,
  Switch,
} from 'react-router-dom'
import PropTypes from 'prop-types'

// 渲染不同的route
function renderRoute (route) {
  const { redirect, routes, component, ...rest } = route
  let routeComp = <Route {...route}></Route>

  if (redirect) {
    routeComp = <Route
      {...rest}
      render={() => <Redirect to={redirect}/>}
    />
  }

  if (routes) {
    routeComp = <Route
      {...rest}
      render={() => <route.component routes={routes} />}
    />
  }

  return routeComp
}

// 导出的组件
function ViewRoute ({ routes }) {
  return (
    <Switch>
      {routes.map(route => renderRoute(route))}
    </Switch>
  )
}

// 参数类型验证
ViewRoute.propTypes = {
  routes: PropTypes.array
}

export default ViewRoute