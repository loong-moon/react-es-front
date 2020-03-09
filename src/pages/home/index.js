import React from 'react'
import {
  Link,
  // useHistory,
  // useLocation,
  // useParams,
  // useRouteMatch,
} from 'react-router-dom'
import PropTypes from 'prop-types'
import { ViewRoute } from '@/components'
import logo from './assets/logo.svg'
import './assets/index.scss'


function Home (props) {
  // const history = useHistory()
  // const Location = useLocation()
  // const Params = useParams()
  // const RouteMatch = useRouteMatch()
  // console.log(history, Location, Params, RouteMatch, 'aaaaaaaaaaaaaaaaa')
  console.log(props, 'aaaaaaaaaaaaaaaaa')
  return (
    <div className="home">
      <header>
        <img src={logo} className="app-logo" alt="logo" />
      </header>
      <div>
        <Link to="/home/page-one">页面1</Link>
        <Link to="/home/page-two" style={{ marginLeft: '10px' }}>页面2</Link>
      </div>
      <div>
        <ViewRoute routes={props.routes}></ViewRoute>
      </div>
    </div>
  )
}

// 参数类型验证
Home.propTypes = {
  routes: PropTypes.array
}

export default Home
