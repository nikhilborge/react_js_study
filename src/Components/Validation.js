import React, { useState } from "react";

function Validation() {
  const [user, setUser] = useState();
  const [password, setPassword] = useState();
  const [userError, setUserError] = useState(false);
  const [passError, setPassError] = useState(false);

  const loginHandler = (e) => {
    e.preventDefault();
    console.log(user, password);
    if (user < 3 || password < 3) {
      alert("type correct values");
    } else {
      alert("all good :)");
    }
  };

  const userHandler = (e) => {
    let item = e.target.value.length;
    if (item < 3) {
      setUserError(true);
    } else {
      setUserError(false);
    }
    setUser(item);
    console.log(e.target.value);
  };

  const passwordHandler = (e) => {
    let item = e.target.value.length;
    if (item < 3) {
      setPassError(true);
    } else {
      setPassError(false);
    }
    setPassword(item);
    console.log(e.target.value);
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={loginHandler}>
        <input type="text" placeholder="enter your name"  onChange={userHandler}/>
        {userError ? <span>Enter valid name</span> : ""}
        <br /> <br />
        <input type="password" placeholder="enter your password" onChange={passwordHandler}
        />
        {passError ? <span>Password not valid</span> : ""}
        <br /> <br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Validation;
