import React, { useRef } from 'react'

function RefHook() {
    let inputRef = useRef(null);

function handleInput(){
    // inputRef.current.value="100";
    // inputRef.current.focus();
    inputRef.current.style.color="red";
    inputRef.current.style.display="none";
}
  return (
    <div>
    <h1>Useref in react</h1>
    <input type="text" ref={inputRef}/>
    <button onClick={handleInput}>Handle Input</button>
    </div>
  )
}

export default RefHook