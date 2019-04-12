import React, { Component } from "react";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      price: 0,
      image_url:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/No_image_3x4.svg/400px-No_image_3x4.svg.png"
    };
  }
  clickHandlerCancel() {
    this.setState({ name: "", price: 0, image_url: "" });
  }
  clickHandlerAdd() {
    let { name, price, image_url } = this.state;
    this.props.createProduct({ name, price, image_url });
    this.setState({ name: "", price: 0, image_url: "" });
  }

  render() {
    return (
      <form>
        <div className="form_image_container">
          <img
            alt="preview"
            className="display_image"
            src={this.state.image_url}
          />
        </div>
        <label>Image URL:</label>
        <input
          type="url"
          onChange={e => this.setState({ image_url: e.target.value })}
        />
        <label>Product Name:</label>
        <input
          type="text"
          onChange={e => this.setState({ name: e.target.value })}
        />
        <label>Price:</label>
        <input
          type="float"
          onChange={e => this.setState({ price: e.target.value })}
        />
        <div className="form_buttons_container">
          <button
            className="form_button"
            onClick={() => this.clickHandlerCancel()}
          >
            Cancel
          </button>
          <button
            className="form_button"
            onClick={() => this.clickHandlerAdd()}
          >
            Add to Inventory
          </button>
        </div>
      </form>
    );
  }
}

export default Form;
