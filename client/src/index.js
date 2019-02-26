import React from 'react'
import ReactDOM from 'react-dom'

import './assets/sass/app.sass'
import App from './App'

import { createStore, compose } from "redux"
import reducer from "./reducers/index"
import { devToolsEnhancer } from 'redux-devtools-extension'
import { Provider } from 'react-redux'

import PropTypes from 'prop-types'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import ProfilePage from './pages/ProfilePage/ProfilePage'

import * as serviceWorker from './serviceWorker'

export const store = compose(devToolsEnhancer()(createStore)(reducer))

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App>
        <Route path="/" exact component={ProfilePage} />
      </App>
    </Router>
  </Provider >,
  document.getElementById('root'))

Router.propTypes = { // is this right? Route or Root i dunno I just work here
  store: PropTypes.object.isRequired
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister()
