import React from 'react'
import ReactDOM from 'react-dom'
import { store } from './store/configureStore'
import { Provider } from 'react-redux'
import App from './App'

import registerServiceWorker from './registerServiceWorker'

import './index.css'

const store = createStore(() => {}, {}) // [1]

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
registerServiceWorker()