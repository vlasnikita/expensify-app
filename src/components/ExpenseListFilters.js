import React, {Component} from 'react'
import { connect } from 'react-redux'
import { DateRangePicker } from 'react-dates'
import { setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate } from '../AC/filters'

class ExpenseListFilters extends Component{
    state = {
        datepickerFocused: null,

    }
    handleDatesChange =({ startDate, endDate })=> {
        this.props.dispatch(setStartDate(startDate))
        this.props.dispatch(setEndDate(endDate))
    }
    handleFocusChange =(datepickerFocused)=> {
        this.setState(()=> ({ datepickerFocused }))
    }

    render() {
        const { filters, dispatch  } = this.props
        return (
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
                <DateRangePicker 
                    startDate={filters.startDate}
                    endDate={filters.endDate}
                    onDatesChange={this.handleDatesChange}
                    focusedInput={this.state.datepickerFocused}
                    onFocusChange={this.handleFocusChange}
                    showClearDates={true}
                    numberOfMonths={1}
                    isOutsideRange={()=>false}
                />
            </div>
        )
    }
}

const mapStateToProps =(state)=>{
    return {
        filters: state.filters
    }
}

export default connect(mapStateToProps)(ExpenseListFilters)