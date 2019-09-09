import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/navbar";
import Counters from "./components/counters";

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 2 },
      { id: 3, value: 8 },
      { id: 4, value: 3 }
    ]
  };
  handleIncrement = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
  };
  handleDecrement = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value--;
    this.setState({ counters });
  };
  render() {
    return (
      <main className="container">
        <Navbar />
        <button type="button" className="btn  m-2">
          Reset
        </button>

        <Counters
          countersApp={this.state.counters}
          value={this.state.counters.value}
          id={this.state.counters.id}
          handleIncrement={this.handleIncrement}
          handleDecrement={this.handleDecrement}
        />
      </main>
    );
  }
}

export default App;
