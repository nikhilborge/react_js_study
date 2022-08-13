import React from "react";

export default class Home extends React.Component{
    constructor()
    {
        super()
    }
    componentDidMount(){
        console.warn("mounted");
    }
    render(){
        return(
            <div>
                <h1>Home class based Component</h1>
            </div>
        )
    }
    
}