import { addExpense, editExpense, removeExpense } from '../../AC/expenses'
import { ADD_EXPENSE, EDIT_EXPENSE, REMOVE_EXPENSE } from '../../constants/'

test('should set up remove expense action object', ()=> {
    const action = removeExpense({ id: '123abc' })
    expect(action).toEqual({
        type: REMOVE_EXPENSE,
        payload: {
            id: '123abc'
        }
    })
})

test('should set up edit expense action object', ()=> {
    const action = editExpense('123abc', {description: 'desc', amount: 100, note: 'note'})
    expect(action).toEqual({
        type: EDIT_EXPENSE,
        payload: {
            id: '123abc',
            updates: {
                description: 'desc', 
                amount: 100, 
                note: 'note'
            }
        }
    })
})

test('should set up add expense action object with default values', ()=> {
    const expenseData = {
        amount: 0,
        createdAt: 0,
        description: '',
        note: '',
    }
    const action = addExpense({})
    expect(action).toEqual({
        type: ADD_EXPENSE,
        payload: {
            ...expenseData,
            id: expect.any(String)
        }
    })
})

test('should set up edit expense action object with provided values', ()=> {
    const expenseData = {
        description: 'desc',
        amount: 100,
        createdAt: 1000,
        note: 'note'
    }
    const action = addExpense(expenseData)
    expect(action).toEqual({
        type: ADD_EXPENSE,
        payload: {
            ...expenseData,
            id: expect.any(String)
        }
    })
})