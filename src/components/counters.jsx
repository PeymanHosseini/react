import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    return (
      <div>
        <button type="button" className="btn  m-2">
          Reset
        </button>
        {this.props.countersApp.map(counter => (
          <Counter key={counter.id} />
        ))}
      </div>
    );
  }
}

export default Counters;
