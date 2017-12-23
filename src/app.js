import React from 'react'
import ReactDOM from 'react-dom'
import AppRouter from './routers/AppRouter'
import configureStore from './store'
import { addExpense } from './AC/expenses'
import { setTextFilter } from './AC/filters'
import { getVisibleExpenses } from './selectors/'
import 'normalize.css/normalize.css'; 
import './styles/styles.scss'

const store = configureStore()

ReactDOM.render(<AppRouter/>, document.getElementById('app'))