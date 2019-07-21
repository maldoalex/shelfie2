import React, { Component } from "react";

class Form extends Component {
  constructor() {
    super();
    this.state = {
      imageUrl:
        "https://slack-imgs.com/?c=1&o1=ro&url=https%3A%2F%2Fzenit.org%2Fwp-content%2Fuploads%2F2018%2F05%2Fno-image-icon.png",
      productName: "",
      productPrice: ""
    };
  }

  handleChange = e => {
    console.log("the key in State " + e.target.name);
    console.log("the value from input field" + e.target.value);
    this.setState({ [e.target.name]: e.target.value });
  };

  handleAdd = e => {};

  handleClear = () => {
    console.log("hi");
    this.setState({
      imageUrl:
        "https://slack-imgs.com/?c=1&o1=ro&url=https%3A%2F%2Fzenit.org%2Fwp-content%2Fuploads%2F2018%2F05%2Fno-image-icon.png",
      productName: "",
      productPrice: ""
    });
  };

  render() {
    return (
      <div>
        <img className="no-photo" src={this.state.imageUrl} />
        <input
          className="image-url"
          name="imageUrl"
          onChange={this.handleChange}
        />
        <input
          className="product-name"
          name="productName"
          value={this.state.productName}
          onChange={this.handleChange}
        />
        <input
          className="product-price"
          name="productPrice"
          value={this.state.productPrice}
          onChange={this.handleChange}
        />
        <button className="cancel-btn" onClick={this.handleClear}>
          Cancel
        </button>
        <button className="add-btn" onClick={this.handleAdd}>
          Add to Inventory
        </button>
      </div>
    );
  }
}

export default Form;
