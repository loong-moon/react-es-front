import React, { Suspense } from 'react'
import {
  BrowserRouter as Router,
} from 'react-router-dom'
import { ViewRoute } from '@/components'
import routes from '@/routes'

import './assets/sass/app.scss'


function App () {
  return (
    <Router>
      <Suspense fallback={null}>
        <ViewRoute routes={routes}></ViewRoute>
      </Suspense>
    </Router>
  )
}

export default App
