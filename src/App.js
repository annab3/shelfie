import React, { Component } from "react";
import "./App.css";
import Dashboard from "./Components/Dashboard/Dashboard";
import Form from "./Components/Form/Form";
import Header from "./Components/Header/Header";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [
        {
          name: "pants",
          price: 20,
          image_url:
            "https://athleta.gap.com/webcontent/0013/370/280/cn13370280.jpg"
        },
        {
          name: "shoes",
          price: 30,
          image_url:
            "https://cdn.pixabay.com/photo/2016/12/10/16/57/shoes-1897708_1280.jpg"
        }
      ]
    };
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
