import React, { useState } from "react";

function InputArea(props){

  const [input, setInput] = useState("");

  function handleChange(event){
    const newInput = event.target.value
    setInput(newInput);
  }

  function addNote(){
     props.clickFunc(input);
     setInput("");
  }


  return (
  <div className="form">
  <input onChange={handleChange} value={input} type="text" />
  <button onClick={addNote} type="submit">
     <span>Add</span>
  </button>
</div>);
}



export default InputArea;
