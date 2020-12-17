import React from "react";

class ProductList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      products: [],
    };
  }

  async componentDidMount() {
    console.log("test");
    const res = await fetch("http://localhost:3001/products/");
    const products = await res.json();
    console.log(products);
    this.setState({ products: products });
  }

  render() {
    return (
      <ul>
        {this.state.products.map((product, index) => (
          <li>{product.name}</li>
        ))}
      </ul>
    );
  }
}

export default ProductList;
