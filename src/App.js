import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/navbar";
import Counters from "./components/counters";

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 12 },
      { id: 2, value: 2 },
      { id: 3, value: 8 },
      { id: 4, value: 3 }
    ]
  };
  render() {
    return (
      <main className="container">
        <Navbar />
        <button type="button" className="btn  m-2">
          Reset
        </button>
        {this.state.counters.map(counter => (
          <Counters
            key={counter.id}
            countersApp={this.state.counters}
            value={counter.value}
          />
        ))}
      </main>
    );
  }
}

export default App;
