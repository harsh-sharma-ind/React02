import React, {useState} from 'react'

function ExpenseForm(props) {
    const [enteredTitle, setEnteredTitle] = useState('')
    const [enteredAmount, setEnteredAmount] = useState('')
    const [enteredDate, setEnteredDate] = useState('')

/*   const [userInput, setUserInput] = useState({
    enteredTitle: '',
    enteredAmount: '',
    enteredDate: '',
   }) */

   const submitHandler = (Event) => {
    console.log('add');
      Event.preventDefault();
      const expenseData = {
        title: enteredTitle,
        amount: enteredAmount,
        date: new Date(enteredDate),
      }

      setEnteredTitle('');
      setEnteredDate('');
      setEnteredAmount('');

      props.onSaveExpenseData(expenseData);
   };

  return (
    <form onSubmit={submitHandler}>
        <div>
            <div>
                <label>Title</label>
                <input type='text' value={enteredTitle} onChange={(Event) => {setEnteredTitle(Event.target.value)}}/>
            </div>

            <div>
                <label>Amount</label>
                <input type='number' min="0.01" step="0.01" value={enteredAmount} onChange={(Event) => {setEnteredAmount(Event.target.value)}}/>
            </div>

            <div>
                <label>Date</label>
                <input type='date' min="2019-01-01" max="2022-12-31" value={enteredDate} onChange={(Event) => {setEnteredDate(Event.target.value)}}/>
                
            </div>
        </div>
        <div>
            <button type='submit'>Add</button>
        </div>
    </form>
  )
}
// onchange = {(Event) => {setUserInput(prevState) => {...prevState, title: Event.target.value}}}
//onChange={(Event) => {setUserInput({...userInput, enteredDate: Event.target.value})}}
export default ExpenseForm