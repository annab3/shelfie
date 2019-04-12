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
  }

  componentDidMount() {
    axios
      .get("/api/inventory")
      .then(res => {
        this.setState({ products: res.data });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    return (
      <div className="App">
        <Header />
        <main>
          <Dashboard products={this.state.products} />
          <Form />
        </main>
      </div>
    );
  }
}

export default App;
