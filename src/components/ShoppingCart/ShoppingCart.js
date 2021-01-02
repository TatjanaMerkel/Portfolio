import React from "react";

class ShoppingCart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],

      isSubmitting: false,
      isError: false,
    };
  }

  async componentDidMount() {
    const res = await fetch("http://localhost:3001/products/");
    const products = await res.json();
    this.setState({ products: products });
  }

  render() {
    return (
      <table border="1">
        {this.state.products.map((product, index) => (
          <tr>
            <td>{product.id}</td>
            <td>{product.name}</td>
          </tr>
        ))}
      </table>
    );
  }
}

export default ShoppingCart;
