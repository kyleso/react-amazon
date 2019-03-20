import React, { Component } from "react";
import { Product } from "../requests";
import ProductForm from "./ProductForm";

class ProductNewPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      description: "",
      price: ""
    };
    this.updateField = this.updateField.bind(this);
    this.createProduct = this.createProduct.bind(this);
  }

  createProduct(event) {
    event.preventDefault();
    const product = this.state;
    Product.create({ ...product }).then(({ id }) =>
      this.props.history.push(`/products/${id}`)
    );
  }

  updateField(params) {
    this.setState(params);
  }

  render() {
    return (
      <div className="ProductNewPage">
        <ProductForm {...this.state} onChange={this.updateField} onSubmit={this.createProduct}/>
      </div>
    );
  }
}

export default ProductNewPage;
