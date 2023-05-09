import "./ExpenseCard.css";

const ExpenseCard = (props) => {
  const toTitleCase = (text) => {
    let x = text.split(" ");
    x.forEach((e, i) => {
      x[i] = x[i][0].toUpperCase() + x[i].slice(1);
    });
    return x.join(" ");
  };

  return (
    <li className="card-container">
      <div className="card">
        <p className="date-box">
          <div className="day-box">{props.day}</div>
          <div className="wrapper">
            <div className="month-box">{props.month}</div>
            <div className="year-box">{props.year}</div>
          </div>
        </p>
        <p className="title-text text">{toTitleCase(props.title)}</p>
        <p className="amount-text text">₹{props.amount}</p>
      </div>
    </li>
  );
};

export default ExpenseCard;
