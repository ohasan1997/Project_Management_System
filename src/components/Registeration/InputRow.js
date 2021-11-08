import React from "react";

function InputRow(props) {
  return(
  <div className={props.className}>
    <label htmlFor={props.htmlFor}>{props.title}</label>
    <input 
    type="text" 
    name={props.name} 
    id={props.name}
    onChange={props.onChange}
    />
  </div>
  )
}

export default InputRow