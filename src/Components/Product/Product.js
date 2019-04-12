import React, { Component } from "react";

class Product extends Component {
  render() {
    return (
      <div className="display_product_container">
        <img src={this.props.product.image_url} alt={this.props.product.name} />
        <div className="display_product_info_container">
          <div>
            <p>{this.props.product.name}</p>
            <p>{"$" + this.props.product.price}</p>
          </div>
          <div className="display_product_button_container">
            <button
              onClick={() => this.props.deleteProduct(this.props.product.id)}
            >
              Delete
            </button>
            <button>Edit</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Product;
