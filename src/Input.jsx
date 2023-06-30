import React, { useEffect, useState } from "react";
import "./index.css";

//how to get items from localstorage
const getLocalItems = () => {
  const data = localStorage.getItem("allNote");
  console.log(data);
  if (data) {
    return JSON.parse(data);
  } else return [];
};

const Input = ({ handleAddInfo }) => {
  const [allNote, setAllNote] = useState(getLocalItems());

  const [getText, setText] = useState([]);

  const [getInput, setInput] = useState([]);

  const getEvent = (event) => {
    setText(event.target.value);
  };

  const getPrice = (event) => {
    setInput(event.target.value);
  };
  const handleSaveClick = () => {
    if (getText.trim().length && getInput.length) {
      handleAddInfo(getText, getInput);
    }
    let note = {
      getText,
      getInput,
    };
    setAllNote([...allNote, note]);
    setText("");
    setInput("");
  };

  //to save items in localstorage
  useEffect(() => {
    localStorage.setItem("notelist", JSON.stringify(allNote));
  }, [allNote]);

  return (
    <React.Fragment>
      <div className="input-container">
        <textarea
          placeholder="enter items"
          onChange={getEvent}
          value={getText}
        ></textarea>
        <input
          type="number"
          placeholder="price"
          onChange={getPrice}
          value={getInput}
        ></input>
        <div className="footer">
          <button className="savesave" onClick={handleSaveClick}>
            Save
          </button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Input;
