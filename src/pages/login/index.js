import React, { Component } from 'react'
import { login } from '@/api/user'
import './assets/index.scss'

const loginReq = () => {
  login().then(res => {
    console.log(res, 'resaaaaaaaaaaaaaaaaa')
  }).catch(error => {
    console.log(error.message, 'erroraaaaaaaaaaaaaaaaaaaaa')
  })
}

class App extends Component {

  loginReq = () => {
    login().then(res => {
      console.log(res, 'resaaaaaaaaaaaaaaaaa')
    }).catch(error => {
      console.log(error.message, 'erroraaaaaaaaaaaaaaaaaaaaa')
    })
  }

  render () {
    return (
      <div className="login">
        <div className="title">登录页</div>
        <div><a onClick={loginReq}>登录</a></div>
      </div>
    )
  }
}

export default App
