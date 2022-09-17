import React, { Component } from 'react'

export default class User extends Component {
  componentWillUnmount(){
    alert("user has been deleted");
  }

  render() {
    return (
      <div>
      <ul>
        <li>Name:Nikhil</li>
        <li>Email:nikhil@gmail.com</li>
        <li>Contact:000000</li>
      </ul>
      </div>
    )
  }
}
