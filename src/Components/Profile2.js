import React from "react";

export default function Profile2 ()
{
    const testFun= ()=>{
        alert("clicked");
    }

    return(
        <div>
            <h1>Profile</h1>
            <button onClick={testFun}>Click Me</button>
        </div>
    )
}