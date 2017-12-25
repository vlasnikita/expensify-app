import { ADD_EXPENSE, REMOVE_EXPENSE, EDIT_EXPENSE } from '../constants/'

export default (state = [], { type, payload }) => {
    switch(type) {
        case ADD_EXPENSE:
            return [
                ...state,
                payload
            ]
     
        case REMOVE_EXPENSE:
            return state.filter(({ id }) => id !== payload.id)

        case EDIT_EXPENSE:
            return state.map((expense) => {
                if(expense.id === payload.id)
                    return { ...expense, ...payload.updates }
                else return expense
            })

        default:
            return state
    }
}