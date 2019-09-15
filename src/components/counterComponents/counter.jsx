import React, { Component } from "react";

class Counter extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <div className="row p-2 ">
            <div className="col-1">
              <span className={this.getBadgeClass()}>{this.formatValue()}</span>
            </div>
            <div className="col">
              <button
                onClick={() =>
                  this.props.onHandleIncrement(this.props.countera)
                }
                type="button"
                className="btn btn-success mr-2"
              >
                +
              </button>
              <button
                type="button"
                className="btn btn-success mr-2"
                onClick={() =>
                  this.props.onHandleDecrement(this.props.countera)
                }
                disabled={this.props.countera.value === 0 ? "disabled" : ""}
              >
                -
              </button>
              <button
                type="button"
                className="btn btn-danger mr-2"
                onClick={() => this.props.onDelete(this.props.countera)}
              >
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
