import React from 'react'
import Card from './Card';
function ExpenseDate(props) {
    const month =  props.Date.toLocaleString('en-US', {month: 'long'});
   const day = props.Date.toLocaleString('en-US', {day: '2-digit'});
   const year = props.Date.getFullYear();
  return (
    <Card>
        <div>{month}</div>
        <div>{day}</div>
        <div>{year}</div>
    </Card>
  )
}

export default ExpenseDate