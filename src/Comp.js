import React, { Component } from "react";

class Comp extends Component {
  render() {
    return (
      <div id="comp">
        <h1>Hello , This is a Class Component</h1>
        <p>This is done using external css</p>
        <p id="pBlue" style={{ color: "blue" }}>
          This is done using inline css
        </p>
      </div>
    );
  }
}

export default Comp;