import React, { Component } from "react";

class test extends Component {
  render() {
    return (
      <div>
        <h3>{this.props.tenNutDangclick}</h3>
        <button
          type="button"
          className="btn btn-outline-warning"
          onClick={this.props.Nutdo}
        >
          Nút đỏ
        </button>
        <button
          type="button"
          className="btn btn-outline-success"
          onClick={this.props.Nutxanh}
        >
          Nút xanh
        </button>
      </div>
    );
  }
}

export default test;
