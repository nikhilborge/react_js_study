import React from "react";

export default class Profile extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "nikhil",
      age: 20,
      count: 0,
    };
  }
  updateState() {
    this.setState({
      name: "peter",
      count: this.state.count + 1,
    });
  }
  render() {
    return (
      <div>
        <h1>hello {this.state.name}</h1>
        <h3>count {this.state.count}</h3>
        <h2>age is {this.state.age}</h2>
        <button
          onClick={() => {
            this.updateState();
          }}
        >
          change state
        </button>
      </div>
    );
  }
}
