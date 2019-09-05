import React, { Component } from "react";

class Counter extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <div className="row p-2 ">
            <div className="col-sm-2">
              <span className="badge badge-secondary">
                {this.props.CounterVal.map(count => (
                  <p> {count.value} </p>
                ))}
              </span>
            </div>
            <div className="col-sm-10">
              <button type="button" className="btn btn-success mr-2">
                +
              </button>
              <button type="button" className="btn btn-success mr-2">
                -
              </button>
              <button type="button" className="btn btn-danger mr-2">
                X
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Counter;
