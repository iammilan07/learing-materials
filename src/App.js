import React, { useState } from "react";
import { nanoid } from "nanoid";
import ExpensePortfolio from "./ExpensePortfolio";
import Header from "./Header";

const App = () => {
  const [list, setList] = useState([
    {
      id: nanoid(),
      text: "new item",
      price: 200,
      date: "2/2/2023",
    },
    {
      id: nanoid(),
      text: "samasung ",
      price: 200,
      date: "2/2/2023",
    },
    {
      id: nanoid(),
      text: "iphone",
      price: 2000,
      date: "2/2/2023",
    },
    {
      id: nanoid(),
      text: "oneplus",
      price: 33300,
      date: "2/2/2023",
    },
  ]);

  const addInfo = (text, price) => {
    const currDate = new Date().toLocaleTimeString();
    const newDatea = {
      id: nanoid(),
      text: text,
      price: price,
      date: currDate,
    };
    const newDatas = [...list, newDatea];
    setList(newDatas);
  };
  const deleteNote = (id) => {
    const newList = list.filter((note) => note.id !== id);
    setList(newList);
  };
  return (
    <React.Fragment>
    <Header/>
      <div className="portfolio-class">
        <ExpensePortfolio
          lists={list}
          handleAddInfo={addInfo}
          handleDeleteList={deleteNote}
        />
      </div>
    </React.Fragment>
  );
};

export default App;
