import React, { Component } from "react";
import Product from "../Product/Product";

class Dashboard extends Component {
  render() {
    return (
      <div>
        {this.props.products.map(product => (
          <Product product={product} />
        ))}
      </div>
    );
  }
}

export default Dashboard;
