import React from 'react'
import Helmet from 'react-helmet'
import { BrowserRouter as Router } from 'react-router-dom'

import Routes from 'routes'
import 'scss/style.scss'

const appName =
  process.env.NODE_ENV === 'test' ? '' : process.env.REACT_APP_NAME

const App: React.FC = () => (
  <Router>
    <div>
      <Helmet titleTemplate={`%s - ${appName}`} />
      <Routes />
    </div>
  </Router>
)

export default App
