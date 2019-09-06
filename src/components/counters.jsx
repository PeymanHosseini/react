import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    return (
      <div>
        <Counter CounterVal={this.props.value} />
      </div>
    );
  }
}

export default Counters;
