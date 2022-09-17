import React, { useState } from "react";

function InputValue() {
  const [data, setData] = useState();
  const [print, setPrint] = useState(false);

  const getInputValue = (event) => {
    const val = event.target.value;
    setData(val);
    console.log(val);
    setPrint(false);
  };

  return (
    <div>
      {print ? <h3>{data}</h3> : null}
      <input type="text" name="text" onChange={getInputValue} />
      <button onClick={() => setPrint(true)}>set value</button>
    </div>
  );
}

export default InputValue;
