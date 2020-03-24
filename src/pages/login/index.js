import React from 'react'
import { login } from '@/api/user'
import './assets/index.scss'

const loginReq = () => {
  login().then(res => {
    console.log(res, 'resaaaaaaaaaaaaaaaaa')
  }).catch(error => {
    console.log(error.message, 'erroraaaaaaaaaaaaaaaaaaaaa')
  })
}

function App () {
  return (
    <div className="login">
      <div className="title">登录页</div>
      <div><a onClick={loginReq}>登录</a></div>
    </div>
  )
}

export default App
