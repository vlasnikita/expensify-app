import React from 'react'
import { connect } from 'react-redux'

const ExpenseListItem = ({ description, amount, createdAt }) => (
    <div>
        <p>{description}</p>
        <p>{amount}</p>
        <p>{createdAt}</p>
    </div>
)

export default ExpenseListItem