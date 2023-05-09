import ExpenseCard from "../../Components/ExpenseCard/ExpenseCard";

const ExpenseContainer = (props) => {
  console.log(props.items);
  let expenseContent = (
    <p style={{ textAlign: "center", fontSize: "2rem" }}>No Expense Found!</p>
  );
  if (props.items.length > 0) {
    expenseContent = props.items.map((obj) => {
      return (
        <ExpenseCard
          key={obj.id}
          title={obj.title}
          amount={obj.amount}
          day={obj.date.getDate()}
          year={obj.date.toLocaleString("eng-US", { year: "numeric" })}
          month={obj.date.toLocaleString("eng-US", { month: "long" })}
        />
      );
    });
  }
  return (
    <div className="expense-container" style={{ zIndex: -1 }}>
      {expenseContent}
    </div>
  );
};

export default ExpenseContainer;
