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
  handleReset = () => {
    const counters = this.state.counters.map(c => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
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
  handleDelete = counter => {
    const counters = this.state.counters.filter(e => e.id !== counter.id);
    this.setState({ counters });
  };
  render() {
    return (
      <main className="container">
        <Navbar />
        <button type="button" className="btn  m-2" onClick={this.handleReset}>
          Reset
        </button>

        <Counters
          countersApp={this.state.counters}
          handleIncrement={this.handleIncrement}
          handleDecrement={this.handleDecrement}
          handleDelete={this.handleDelete}
        />
      </main>
    );
  }
}

export default App;
