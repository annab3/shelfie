import React, { Component } from "react";
import { Link } from "react-router-dom";

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
            <Link to={"/update/" + this.props.product.id}>
              <button onClick={() => this.props.setId(this.props.product.id)}>
                Edit
              </button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Product;
