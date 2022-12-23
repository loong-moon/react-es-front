import React from 'react'
import ReactDOM from 'react-dom'
import Loading from './index'

class LoadingService {
  constructor (props) {
    const { text = '加载中...', icon } = props
    const obj = { text, icon }
    
    this.element = document.createElement('div')
    ReactDOM.render(<Loading {...obj} />, this.element)
    document.body.appendChild(this.element)
  }

  close () {
    document.body.removeChild(this.element)
  }

  static init (option) {
    return new LoadingService(option)
  }
}

export default LoadingService

