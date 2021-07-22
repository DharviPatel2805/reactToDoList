import React, { useState } from "react";


function TodoList(props){

  const [isDone, setHandle] = useState(false)

  function handleClick(){
        setHandle((prevValue) => {return(!prevValue)})
  }

  return(
    <div onClick = {handleClick}>
      <li style={{textDecoration: isDone ? "line-through" : "none"}}>
       {props.text}
      </li> 
    </div>
  )
}





export default TodoList;