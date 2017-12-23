import React from 'React'
import { connect } from 'react-redux'
import { setTextFilter } from '../AC/filters'

const ExpenseListFilters =({ filters, dispatch })=> (
    <div>
        <input type="text" value={filters.text} onChange={(e)=> dispatch(setTextFilter(e.target.value))} />
    </div>
)

const mapStateToProps =(state)=>{
    return {
        filters: state.filters
    }
}

export default connect(mapStateToProps)(ExpenseListFilters)