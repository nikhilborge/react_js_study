import React, { useState } from "react";

function Toggle() {
  const [status, setStatus] = useState(true);
  const show = () => {
    setStatus(true);
  };

  const hide = () => {
    setStatus(false);
  };

  return (
    <div>
      {status ? <h1>Hello world</h1> : null}
      <button onClick={show}>Show</button>
      <button onClick={hide}>hide</button>
      <button onClick={() => setStatus(!status)}>toggle</button>
    </div>
  );
}

export default Toggle;
