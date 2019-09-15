import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    return (
      <div>
        {this.props.countersApp.map(counter => (
          <Counter
            key={counter.id}
            value={counter.value}
            countera={counter}
            onHandleIncrement={this.props.handleIncrement}
            onHandleDecrement={this.props.handleDecrement}
            onDelete={this.props.handleDelete}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
