import { SET_TEXT_FILTER, SORT_BY_DATE, SORT_BY_AMOUNT, SET_START_DATE, SET_END_DATE } from '../constants/'

const setTextFilter =(text)=> {
    return {
        type: SET_TEXT_FILTER,
        payload: {
            text
        }
    }
}

const sortByDate =()=> {
    return {
        type: SORT_BY_DATE        
    }
}

const sortByAmount =()=> {
    return {
        type: SORT_BY_AMOUNT     
    }
}

const setStartDate =(startDate)=> {
    return {
        type: SET_START_DATE,
        payload: {
            startDate
        }
    }
}

const setEndDate =(endDate)=> {
    return {
        type: SET_END_DATE,
        payload: {
            endDate
        }
    }
}

export { setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate }