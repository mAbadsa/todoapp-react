import React, {useState} from "react";
import ToDoItem from "./ToDoItem";
import InputArea from "./InputArea";

function App() {


  const [items, setItems] = useState([]);


  function addItems (inputText) {
    document.querySelector('.todoInput').focus();
    setItems( prevValue => {
      return [...prevValue, inputText]
    })
    
  }

  function deleteItem (id) {
    console.log(id);
    setItems(prevValue => {
     return prevValue.filter((_, index) => {
       return index !== id;
     })
    })
  }


  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <InputArea
        onAdd={addItems}
      />
      <div>
        <ul>
          {items.map( (item, index) => {
              return <ToDoItem
              onChecked={deleteItem}
              text={item}
              id={index}  
              key={index}
              />
            }
          )}
        </ul>
      </div>
    </div>
  );
}

export default App;
