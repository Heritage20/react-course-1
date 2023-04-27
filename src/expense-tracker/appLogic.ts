import React from "react";

const appLogic = () => {
  return;
  // const [selectedCategory, setSelectedCategory] = useState("");

  // const [expenses, setExpenses] = useState([
  //   { id: 1, description: "movie", amount: 10, category: "Entertainment" },
  //   { id: 2, description: "beverages", amount: 10, category: "Groceries" },
  //   { id: 3, description: "utensils", amount: 10, category: "Utilities" },
  //   { id: 4, description: "movie", amount: 10, category: "Entertainment" },
  // ]);

  // const visibleExpenses = selectedCategory
  //   ? expenses.filter((e) => e.category === selectedCategory)
  //   : expenses;

  //       <div>
  //         <div className="mb-5">
  //           <ExpenseForm
  //             onSubmit={(expense) =>
  //               setExpenses([
  //                 ...expenses,
  //                 { ...expense, id: expenses.length + 1 },
  //               ])
  //             }
  //           />
  //         </div>
  //         <div className="mb-3">
  //           <ExpenseFilter
  //             onSelectCategory={(category) => setSelectedCategory(category)}
  //           />
  //         </div>
  //         <ExpenseList
  //           expenses={visibleExpenses}
  //           onDelete={(id) => setExpenses(expenses.filter((e) => e.id !== id))}
  //         />
  //       </div>;
};

export default appLogic;
