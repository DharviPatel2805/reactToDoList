import React, { useState } from "react";
import TodoList from "./TodoList";
import InputArea from "./InputArea"

function App() {
  
  const [items, setItems] = useState([]); 


  function handleClick(input){
       setItems((prevValue) => {
         return[...prevValue, input];
       });
  }


  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>

      <InputArea clickFunc={handleClick}/>

      <div>
        <ul>
         { items.map((eachItem) => { return(
            <TodoList  text= {eachItem}/>
          )}  
        )};
        </ul>
      </div>
    </div>
  );
}

export default App;
