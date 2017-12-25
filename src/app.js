import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import AppRouter from './routers/AppRouter'
import configureStore from './store'
import { addExpense } from './AC/expenses'
import { setTextFilter } from './AC/filters'
import { getVisibleExpenses } from './selectors/'
import 'normalize.css/normalize.css'; 
import './styles/styles.scss'

const store = configureStore()

const jsx = (
    <Provider store={store}>
        <AppRouter/>
    </Provider>
)
ReactDOM.render(jsx, document.getElementById('app'))