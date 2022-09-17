import React, { useState } from "react";

const Form = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const formSubmitHandler = (e) => {
    e.preventDefault();
    const data = [{ userName: userName, password: password }];
    console.log(data);
  };

  return (
    <div>
      <h2>This is a form</h2>
      <form onSubmit={formSubmitHandler}>
        <div>
          <input
            type="text"
            onChange={(e) => setUserName(e.target.value)}
            name="user"
          />
        </div>
        <div>
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            name="password"
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;
