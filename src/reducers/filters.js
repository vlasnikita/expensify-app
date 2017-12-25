import moment from 'moment'
import { SET_TEXT_FILTER, SORT_BY_DATE, SORT_BY_AMOUNT, SET_START_DATE, SET_END_DATE } from '../constants/'

const defaultFiltersState = { 
    text: '', 
    sortBy: 'date', 
    startDate: moment().startOf('month'), 
    endDate: moment() .endOf('month')
}

export default (
    state = defaultFiltersState, 
    action) => {

    const { type, payload } = action

    switch (type) {
        case SET_TEXT_FILTER:
            return { ...state, text: payload.text }

        case SORT_BY_DATE:
            return { ...state, sortBy: 'date' }

        case SORT_BY_AMOUNT:
            return { ...state, sortBy: 'amount' }

        case SET_START_DATE:
            return { ...state, startDate: payload.startDate }

        case SET_END_DATE:
            return { ...state, endDate: payload.endDate }

        default:
            return state
    }
}