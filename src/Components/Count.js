import React, { useState, useEffect } from "react";

const Count = () => {
  const [counter, setCounter] = useState(1);

  // useEffect(()=>{
  //   console.log(counter);
  // },[])

  const plus = () => {
    setCounter(counter + 1);
  };

  return (
    <div>
      <h2>counter {counter}</h2>
      <button onClick={plus}>+</button>
    </div>
  );
};

export default Count;
