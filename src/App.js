import React, { Component } from "react";
import "./App.css";
import Dashboard from "./components/dashboard/Dashboard";
import Header from "./components/header/Header";
import Form from "./components/form/Form";

class App extends Component {
  constructor() {
    super();
    this.state = {
      inventory: [
        {
          imageUrl:
            "https://images-na.ssl-images-amazon.com/images/I/61lohycRqkL._UX425_.jpg",
          productName: "blue shirt",
          productPrice: 10.5
        },
        {
          imageUrl:
            "https://images-na.ssl-images-amazon.com/images/I/61IaIW%2B2vRL._UX425_.jpg",
          productName: "red shirt",
          productPrice: 15.5
        },
        {
          imageUrl:
            "https://images-na.ssl-images-amazon.com/images/I/81cir-hKviL._UL1500_.jpg",
          productName: "white shirt",
          productPrice: 20.5
        }
      ]
    };
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Dashboard inventory={this.state.inventory} />
        <Form />
      </div>
    );
  }
}

export default App;
