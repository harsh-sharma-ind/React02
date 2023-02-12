import React from 'react'
import ExpenseForm from './ExpenseForm'
function NewExpense(props) {
    const saveExpenseDataHandler = (enteredExpenseData) => {
      const expenseData = {
          ...enteredExpenseData,
        id: Math.random().toString()
      }
      //passing data from child to parent by calling function and passing data as input in a function
      props.onAddExpense(expenseData);
    };
  return (
    <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}/>
  )
}

export default NewExpense