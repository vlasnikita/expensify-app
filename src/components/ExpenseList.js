import React from 'react'
import { connect } from 'react-redux'
import ExpenseListItem from './ExpenseListItem'
import { getVisibleExpenses } from '../selectors/index';

const ExpenseList = ({ expenses }) => (
    <div>
        <h1>ExpenseList</h1>
        {getBody(expenses)}
    </div>
)

const getBody =(expenses)=> {
    console.log('Expenses:', expenses)
    return (
        <ul>
        {
        expenses.map(expense => (
            <li key={expense.id}>
                <ExpenseListItem {...expense} />
            </li>
        ))
        }
        </ul>
    )
}

const mapStateToProps = (state)=> {
    return {
        expenses: getVisibleExpenses(state.expenses, state.filters)
    }
}

export default connect(mapStateToProps)(ExpenseList)