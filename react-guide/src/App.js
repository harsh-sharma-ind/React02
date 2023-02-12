import ExpenseItem from "./components/ExpenseItem";
import NewExpense from "./components/NewExpense";
function App() {
  const addExpenseHandler = (expense) => {
    console.log(expense)
  }
  const expenses = [
    {
      title:'Car Insurance',
      price: '146',
      Date: new Date(12, 12, 2022)
    }
  ]
  return (
    <div className="App">
      <NewExpense onAddExpense={addExpenseHandler}/>
      <ExpenseItem
      title={expenses[0].title}
      price={expenses[0].price}
      Date={expenses[0].Date}
      />
    </div>
  );
}

export default App;
