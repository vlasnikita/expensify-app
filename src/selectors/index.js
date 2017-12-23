export const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
    return expenses.filter(expense => 

        (isNaN(startDate) || expense.createdAt >= startDate) &&
        (isNaN(endDate) || expense.createdAt <= endDate) &&
        expense.description.toLowerCase().includes(text.toLowerCase())

    ).sort((a, b) => {

        switch(sortBy) {
            case 'date':
                return a.createdAt > b.createdAt ? -1 : 1
            case 'amount':
                return a.amount > b.amount ? -1 : 1
            default:
                return 0
                
        }
    })
}