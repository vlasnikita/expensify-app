import React from 'react'
import { connect } from 'react-redux'
import { removeExpense } from '../AC/expenses'

const ExpenseListItem = ({ id, description, amount, createdAt, dispatch }) => (
    <div>
        <p>{description}</p>
        <p>{amount}</p>
        <p>{createdAt}</p>
        <button onClick={()=> dispatch(removeExpense({ id }))}>Remove</button>
    </div>
)

export default connect()(ExpenseListItem)