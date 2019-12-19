import React, { useState } from "react";

function InputArea(props) {
  const [inputText, setTodo] = useState("");

  function handleTodo(e) {
    const newValue = e.target.value;
    setTodo(newValue);
  }

  function handleEmptyItems() {
    document.querySelector(".todoInput").focus();
    return setTodo("");
  }

  return (
    <div className="form">
      <input
        className="todoInput"
        onChange={handleTodo}
        value={inputText}
        type="text"
      />
      <button
        onClick={() => {
          if (inputText.trim()) {
            props.onAdd(inputText);
          } else {
            return handleEmptyItems;
          }
          setTodo("");
        }}
      >
        <span>Add</span>
      </button>
    </div>
  );
}

export default InputArea;
