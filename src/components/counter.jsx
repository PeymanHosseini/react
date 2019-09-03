import React, { Component } from "react";

class Counter extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <div className="row p-2 ">
            <div class="col-sm-2">
              <span className="badge badge-secondary">zero</span>
            </div>
            <div class="col-sm-10">
              <button type="button" class="btn btn-success mr-2">
                +
              </button>
              <button type="button" class="btn btn-success mr-2">
                -
              </button>
              <button type="button" class="btn btn-danger mr-2">
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
