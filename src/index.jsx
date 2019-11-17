import React from 'react'
import ReactDOM from 'react-dom'
import {applyMiddleware, createStore} from 'redux'
import {Provider} from 'react-redux'
import promise from 'redux-promise'

import App from './main/app'
import reducers from './main/reducers'

// devTools serve para interagir com o plugin ReduxDevtools instalado no Chrome
const devTools = window.__REDUX_DEVTOOLS_EXTENSION__
    && window.__REDUX_DEVTOOLS_EXTENSION__()
 
//Middleware usa métodos encadeados     
const store = applyMiddleware(promise)(createStore)(reducers, devTools)
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
, document.getElementById('root'))