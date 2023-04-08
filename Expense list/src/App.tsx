import { useState } from "react";
import ExpenseList from "./components/ExpenseList";
import { ExpenseFilter } from "./components/ExpenseFilter";
import ExpenseForm from "./components/ExpenseForm";
import categories from "./categories";

function App() {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [expeses, setExpenses] = useState([
    { id: 1, description: "sss", amount: 10, category: "Groceries" },
    { id: 2, description: "dd", amount: 10, category: "Utility" },
    { id: 3, description: "ssaaas", amount: 20, category: "Utility" },
    { id: 4, description: "ggg", amount: 10, category: "Utility" },
  ]);

  const visibleExpenses = selectedCategory
    ? expeses.filter((e) => e.category === selectedCategory)
    : expeses;

  return (
    <div>
      <div className="mb-5">
        <ExpenseForm onSubmit={expense => setExpenses([...expeses, {...expense, id: ExpenseList.length + 1}])}/>
      </div>
      <div className="mb-3">
        <ExpenseFilter
          onSelectCategory={(category) => setSelectedCategory(category)}
        />
      </div>
      <ExpenseList
        expeses={visibleExpenses}
        onDelete={(id) =>
          setExpenses(expeses.filter((expense) => expense.id !== id))
        }
      />
    </div>
  );
}

export default App;
