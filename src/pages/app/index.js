import React from 'react'
import {
  BrowserRouter as Router,
} from 'react-router-dom'
import { ViewRoute } from '@/components'
import routes from '@/routes'

import './assets/index.scss'


function App () {
  return (
    <Router>
      <ViewRoute routes={routes}></ViewRoute>
    </Router>
  )
}

export default App
