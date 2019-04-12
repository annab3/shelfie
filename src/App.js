import React, { Component } from "react";
import axios from "axios";
import "./App.css";
import Dashboard from "./Components/Dashboard/Dashboard";
import Form from "./Components/Form/Form";
import Header from "./Components/Header/Header";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: []
    };
    this.createProduct = this.createProduct.bind(this);
    this.deleteProduct = this.deleteProduct.bind(this);
  }

  componentDidMount() {
    this.getInventory();
  }
  getInventory() {
    axios
      .get("/api/inventory")
      .then(res => {
        this.setState({ products: res.data });
      })
      .catch(error => {
        console.log(error);
      });
  }
  createProduct(object) {
    axios
      .post("/api/product", object)
      .then(res => this.setState({ products: res.data }))
      .catch(error => console.log(error));
  }
  deleteProduct(id) {
    axios
      .delete("/api/product/" + id)
      .then(res => this.setState({ products: res.data }))
      .catch(error => console.log(error));
  }

  render() {
    return (
      <div className="App">
        <Header />
        <main>
          <Dashboard
            products={this.state.products}
            deleteProduct={this.deleteProduct}
          />
          <Form createProduct={this.createProduct} />
        </main>
      </div>
    );
  }
}

export default App;
