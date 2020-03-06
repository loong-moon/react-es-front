import React from 'react'
import logo from './assets/logo.svg'
import { login } from '@/api/user'
import './assets/index.scss'


function App () {
  login().then(res => {
    console.log(res, 'resaaaaaaaaaaaaaaaaa')
  }).catch(error => {
    console.log(error.message, 'erroraaaaaaaaaaaaaaaaaaaaa')
  })
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload. 
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  )
}

export default App
