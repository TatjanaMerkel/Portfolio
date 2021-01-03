import React from "react";
import "./ShoppingCart.css";

class ShoppingCart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      total: 0,
      isSubmitting: false,
      isError: false,
    };
  }

  componentDidMount() {
    Object.keys(localStorage).forEach(async (id) => {
      const res = await fetch(`http://localhost:3001/product/${id}`);
      const product = await res.json();

      const product_total = this.calculate_total(product);
      this.setState({total: this.state.total + product_total})

      const products = this.state.products;
      products.push(product);
      this.setState({ products: products });
    });
  }

  calculate_total(product) {
    return (product.price / 100) * localStorage.getItem(product.id);
  }

  render() {
    return (
      <table
        border="1"
        style={{
          margin: "auto",
          "margin-top": "20px",
          "border-spacing": "8px",
          "border-collapse": "separate",
        }}
      >
        <thead>
          <th>Image</th>
          <th>Name</th>
          <th>Price</th>
          <th>Amount</th>
          <th>Total </th>
        </thead>
        <tbody>
          {this.state.products.map((product, index) => (
            <tr>
              <td>
                <img
                  width="100"
                  height="100"
                  src={product.image}
                  alt=""
                  style={{ "object-fit": "cover" }}
                />
              </td>
              <td>{product.name}</td>
              <td>{product.price / 100} €</td>
              <td>{localStorage.getItem(product.id)} </td>
              <th>{this.calculate_total(product)} €</th>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <th>{this.state.total} €</th>
          </tr>
        </tfoot>
      </table>
    );
  }
}

export default ShoppingCart;
