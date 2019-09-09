import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    return (
      <div>
        {this.props.countersApp.map(counter => (
          <Counter
            key={counter.id}
            id={counter.id}
            value={counter.value}
            onHandleIncrement={this.props.handleIncrement}
            countera={this.props.countersApp}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
