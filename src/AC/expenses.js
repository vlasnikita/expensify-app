import uuid from 'uuid'
import { ADD_EXPENSE, REMOVE_EXPENSE, EDIT_EXPENSE } from '../constants/'

const addExpense = (expense) => {
    const { description = '', note = '', amount = 0, createdAt = 0 } = expense
    return {
        type: ADD_EXPENSE,
        payload: {
            id: uuid(),
            description,
            note,
            amount,
            createdAt
        }
    }
}

const removeExpense = ({ id } = {}) => {
    return {
        type: REMOVE_EXPENSE,
        payload: { id }
    }
}

const editExpense = (id, updates) => {
    return {
        type: EDIT_EXPENSE,
        payload: { id, updates }
    }
}

export { addExpense, removeExpense, editExpense }