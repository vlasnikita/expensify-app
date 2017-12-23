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

store.dispatch(addExpense({name: 'Foo', description: 'some description', amount: 12, createdAt: 91000}))
store.dispatch(addExpense({name: 'Bar', description: 'another description', amount: 37, createdAt: 5500}))

const jsx = (
    <Provider store={store}>
        <AppRouter/>
    </Provider>
)
ReactDOM.render(jsx, document.getElementById('app'))