import React from "react";
import Expense from "./Expense";
import Input from "./Input";
import "./index.css";

const ExpensePortfolio = ({ lists, handleAddInfo, handleDeleteList }) => {
  return (
    <React.Fragment>
      <div className="listitems">
        {lists.map((list) => (
          <Expense
            id={list.id}
            text={list.text}
            price={list.price}
            date={list.date}
            handleDeleteList={handleDeleteList}
          />
        ))}
      </div>
      <Input handleAddInfo={handleAddInfo} />
    </React.Fragment>
  );
};

export default ExpensePortfolio;
