import React, { Component } from "react";
import Product from "../Product/Product";

class Dashboard extends Component {
  render() {
    return (
      <div>
        {this.props.products.map((product, index) => (
          <Product
            product={product}
            key={index}
            deleteProduct={this.props.deleteProduct}
          />
        ))}
      </div>
    );
  }
}

export default Dashboard;
