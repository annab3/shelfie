import React, { Component } from "react";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image_url:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/No_image_3x4.svg/400px-No_image_3x4.svg.png",
      product_name: "",
      price: 0
    };
  }
  clickHandlerCancel() {
    this.setState({ image_url: "", product_name: "", price: 0 });
  }

  render() {
    return (
      <form>
        <div>
          <img className="display_image" src={this.state.image_url} />
        </div>
        <label>Image URL:</label>
        <input
          type="url"
          onChange={e => this.setState({ image_url: e.target.value })}
        />
        <label>Product Name:</label>
        <input
          type="text"
          onChange={e => this.setState({ product_name: e.target.value })}
        />
        <label>Price:</label>
        <input
          type="number"
          onChange={e => this.setState({ price: e.target.value })}
        />
        <div>
          <button>Cancel</button>
          <button>Add to Inventory</button>
        </div>
      </form>
    );
  }
}

export default Form;
