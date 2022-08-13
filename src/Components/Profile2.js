import React from "react";
export default class Profile2 extends React.Component
{
    testFun(){
        alert("clicked");
    }
   render(){
    return(
        <div>
            <h1>Profile</h1>
            <button onClick={()=>{this.testFun()}}>Click Me</button>
        </div>
    )
   }
} 