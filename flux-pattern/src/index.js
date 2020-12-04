import React from 'react'

import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import App from './App.jsx'
import todoApp from './reducers/Reducers'

let store = createStore(todoApp)
let rootElement = document.getElementById('root')

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,

  rootElement
)
