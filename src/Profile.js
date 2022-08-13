import React from "react";

export default class Profile extends React.Component{

render(){

    return (
  
              <div>Hello {this.props.text.name} you lived in {this.props.text.add}</div>
           )
}
};


