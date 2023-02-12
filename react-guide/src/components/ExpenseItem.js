import React, {useState} from 'react'
import ExpenseDate from './ExpenseDate'
import Card from './Card'
function ExpenseItem(props) {
  const [title, setTitle] = useState(props.title)
  const clickHandler = () => {
    console.log('clicked!')
    setTitle('Updated!')
  }
   
  return (
    <Card className='expense-item'>
        <ExpenseDate Date={props.Date}/>
        
        <div className='expense-item__description'>
            <h2>{title}</h2>
            <div className='expense-item__price'>${props.price}</div>
        </div>
        <button onClick={clickHandler}>Change Title</button>
    </Card>
  )
}

export default ExpenseItem