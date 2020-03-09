import React from 'react'
import { login } from '@/api/user'
import './assets/index.scss'


function App () {
  login().then(res => {
    console.log(res, 'resaaaaaaaaaaaaaaaaa')
  }).catch(error => {
    console.log(error.message, 'erroraaaaaaaaaaaaaaaaaaaaa')
  })
  return (
    <div className="login">
      登录页
    </div>
  )
}

export default App
