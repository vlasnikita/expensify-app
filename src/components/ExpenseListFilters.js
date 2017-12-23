import React from 'react'
import { connect } from 'react-redux'
import { setTextFilter, sortByAmount, sortByDate } from '../AC/filters'

const ExpenseListFilters =({ filters, dispatch })=> (
    <div>
        <input 
            type="text" 
            value={filters.text} 
            onChange={(e)=> dispatch(setTextFilter(e.target.value))} 
        />
        <select 
            onChange={(e)=> e.target.value === 'date' ? dispatch(sortByDate()) : dispatch(sortByAmount())}
            value={filters.sortBy}
        >
            <option value="date">Date</option>
            <option value="amount">Amount</option>
        </select>
    </div>
)

const mapStateToProps =(state)=>{
    return {
        filters: state.filters
    }
}

export default connect(mapStateToProps)(ExpenseListFilters)