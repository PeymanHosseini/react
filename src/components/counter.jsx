import React, { Component } from "react";

class Counter extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <div className="row p-2 ">
            <div className="col-sm-2">
              <span className={this.getBadgeClass()}>{this.formatValue()}</span>
            </div>
            <div className="col-sm-10">
              <button
                onClick={() => this.props.onHandleIncrement(this.props.id)}
                type="button"
                className="btn btn-success mr-2"
              >
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
  getBadgeClass() {
    let classes = "badge badge-";
    classes += this.props.value === 0 ? "warning" : "primary";
    return classes;
  }
  formatValue() {
    const { value } = this.props;
    return value === 0 ? "zero" : value;
  }
}

export default Counter;
