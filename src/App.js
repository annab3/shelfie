import React, { Component } from "react";
import axios from "axios";
import { HashRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Dashboard from "./Components/Dashboard/Dashboard";
import Form from "./Components/Form/Form";
import Header from "./Components/Header/Header";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      id: 0
    };
    this.createProduct = this.createProduct.bind(this);
    this.deleteProduct = this.deleteProduct.bind(this);
    this.setId = this.setId.bind(this);
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
  updateProduct(id, object) {
    axios
      .put("/api/product/" + id, object)
      .then(res => this.setState({ products: res.data }))
      .catch(error => console.log(error));
  }
  setId(id) {
    this.setState({ id });
  }

  render() {
    return (
      <HashRouter>
        <div className="App">
          <Header />
          <main>
            <Switch>
              <Route
                exact
                path="/"
                render={() => (
                  <Dashboard
                    products={this.state.products}
                    deleteProduct={this.deleteProduct}
                    setId={this.setId}
                  />
                )}
              />
              <Route
                path="/form"
                render={() => <Form createProduct={this.createProduct} />}
              />
              <Route
                path="/update/:id"
                render={() => (
                  <Form updateProduct={this.updateProduct} id={this.state.id} />
                )}
              />
            </Switch>
          </main>
        </div>
      </HashRouter>
    );
  }
}

export default App;
