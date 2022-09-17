import React from "react";


function User(props) {
  const data = "UserName";

  return (
    <div>
      <h2>User Name : {props.name}</h2>
      <button onClick={() => props.alert(data)}>Click me</button>
    </div>
  );
}

export default User;
