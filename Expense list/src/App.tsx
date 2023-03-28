import { useState } from "react";
import ExpenseFilter from "./components/ExpenseFilter";
import ExpenseList from "./components/ExpenseList";
import Form from "./components/Form";

function App() {
  const[selectedCategory, setSelectedCategory] = useState('')
  const [expenses, setExpenses] = useState([
    { id: 1, description: "sss", amount: 10, category: "Groceries" },
    { id: 2, description: "dd", amount: 10, category: "Utility" },
    { id: 3, description: "ssaaas", amount: 20, category: "Utility" },
    { id: 4, description: "ggg", amount: 10, category: "Utility" },
  ]);

  const visibleExpenses = selectedCategory ? expenses.filter(e => e.category === selectedCategory) : expenses


  return (
    <>
      <div>
        <Form />
        <div className="mb-5">
          <ExpenseFilter
            onSelectCategory={category => setSelectedCategory(category)}
          />
        </div>
        <ExpenseList
          expenses={visibleExpenses}
          onDelete={(id) =>
            setExpenses(expenses.filter((exp) => exp.id !== id))
          }
        />
      </div>
    </>
  );
}

export default App;
