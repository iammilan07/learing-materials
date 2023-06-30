import React from "react";
import "./index.css";

const Expense = ({ id, text, price, date, handleDeleteList }) => {
  return (
    <React.Fragment>
      <div className="main-container">
        <div className="container">
          <div className="textOnly">{text}</div>
          <span className="priceOnly">-Rs {price}/-</span>
          <div className="footer">
            <small>{date}</small>
            {/* <button className="save">Save</button> */}
            <button className="delete" onClick={() => handleDeleteList(id)}>
              Delete
            </button>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
export default Expense;
