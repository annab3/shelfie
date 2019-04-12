import React, { Component } from "react";

class Product extends Component {
  render() {
    return (
      <div className="display_product_container">
        <img src={this.props.product.image_url} />
        <div>
          <h3>{this.props.product.name}</h3>
          <h3>{"$" + this.props.product.price}</h3>
        </div>
      </div>
    );
  }
}

export default Product;
