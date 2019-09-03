import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/navbar";

import Counters from "./components/counters";

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 }
    ]
  };
  render() {
    return (
      <main className="container">
        <Navbar />
        <Counters
          counters={this.state.counters.id}
          counterValue={this.state.counters.value}
        />
      </main>
    );
  }
}

export default App;
