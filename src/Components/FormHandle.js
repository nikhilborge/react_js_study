import React, { useState } from "react";

function FormHandle() {
  const [name, setName] = useState("");
  const [tnc, setTnc] = useState(false);
  const [interest, setInterest] = useState("");

  const getFromData = (event) => {
    event.preventDefault();
    console.log(name, tnc, interest);
  };
  return (
    <div>
      <h3>Handle form</h3>
      <form onSubmit={getFromData}>
        <input type="text" placeholder="Enter the name" onChange={(e)=> setName(e.target.value)} />
        <br />
        <select onChange={(e)=> setInterest(e.target.value)}>
          <option>Select Options</option>
          <option>Marvel</option>
          <option>DC Comic</option>
        </select>
        <br />
        <input type="checkbox" onChange={(e) => setTnc(e.target.checked)} />
        <span>Accept terms and conditions</span>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default FormHandle;
