import React, {Component} from 'react'
import moment from 'moment'
import { SingleDatePicker } from 'react-dates'
import 'react-dates/initialize'
import 'react-dates/lib/css/_datepicker.css'

export default class ExpenseForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            description: props.expense ? props.expense.description : '',
            note: props.expense ? props.expense.note : '',
            amount: props.expense ? '' + (props.expense.amount) / 100 : '',
            createdAt: props.expense ?  moment(props.expense.createdAt) : moment(),
            datepickerFocused: false,
            error: ''
        }
    }
    handleDescriptionChange =e=> {
        const description = e.target.value
        this.setState(()=> ({ description }))
    }
    handleAmountChange =e=> {
        const amount = e.target.value
    if(!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
           this.setState(()=> ({ amount })) 
        }
    }
    handleDateChange =createdAt=> {
        if(createdAt) {
            this.setState(()=> ({ createdAt }))
        }
    }
    handleDateFocusChange =({ focused })=> {
        this.setState(()=> ({ datepickerFocused: focused }))
    }
    handleNoteChange =e=> {
        const note = e.target.value
        this.setState(()=> ({ note }))
    }
    handleSubmit =e=> {
        e.preventDefault()

        if(!this.state.description || !this.state.amount) {
            this.setState(()=> ({ error: 'Please provide description & amount!' }))
        }else {
            const { description, amount, createdAt, note } = this.state

            this.setState(()=> ({ error: '' }))
            this.props.onFormSubmit({
                description: description,
                amount: parseFloat(amount, 10) * 100,
                createdAt: createdAt.valueOf(),
                note
            })
        }
    }

    render() {

        const { description, amount, note, createdAt, datepickerFocused, error} = this.state

        return (
            <div>
                {error && <p>{error}!</p>}
                <form onSubmit={this.handleSubmit}>
                    <input
                        type='text'
                        placeholder='Description'
                        autoFocus
                        value={description}
                        onChange={this.handleDescriptionChange}
                    />
                    <input
                        type='text'
                        placeholder='Amout'
                        value={amount}
                        onChange={this.handleAmountChange}
                    />
                    <SingleDatePicker 
                        date={createdAt}
                        onDateChange={this.handleDateChange}
                        focused={datepickerFocused}
                        onFocusChange={this.handleDateFocusChange}
                        numberOfMonths={1}
                        isOutsideRange={()=> false}
                    />
                    <textarea
                        placeholder='Add note for an expense'
                        value={note}
                        onChange={this.handleNoteChange}
                    >
                    </textarea>
                    <button>Add expense</button>
                </form>
            </div>
        )
    }
}