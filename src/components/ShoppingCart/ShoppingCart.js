import "./ShoppingCart.css";

import { Button } from "react-bootstrap";
import React from "react";

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

  setItem(id, amount) {
    localStorage.setItem(String(id), String(amount));

    this.calculate_total_total();
  }

  componentDidMount() {
    this.loadLocalStorage();
  }

  loadLocalStorage() {
    Object.keys(localStorage).forEach(async (id) => {
      const res = await fetch(`http://localhost:3001/product/${id}`);
      console.log(res);
      const product = await res.json();

      const products = this.state.products;
      products.push(product);
      this.setState({ products: products });

      this.calculate_total_total();
    });
  }

  calculate_total(product) {
    return ((product.price / 100) * localStorage.getItem(product.id)).toFixed(
      2
    );
  }

  calculate_total_total() {
    let total = 0;

    for (const product of this.state.products) {
      total += Number(this.calculate_total(product));
    }

    this.setState({ total: total });
  }

  removeItem(product) {
    localStorage.removeItem(product.id);

    this.calculate_total_total();

    const products = this.state.products.filter((p) => p.id !== product.id);
    this.setState({ products: products });
  }

  render() {
    return (
      <div>
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
                <td>
                  <input
                    min="1"
                    type="number"
                    value={localStorage.getItem(product.id)}
                    onChange={(event) =>
                      this.setItem(product.id, event.target.value)
                    }
                  />
                </td>
                <th>{this.calculate_total(product)} €</th>
                <td>
                  <Button onClick={() => this.removeItem(product)}>
                    Delete
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <th>{this.state.total.toFixed(2)} €</th>
            </tr>
          </tfoot>
        </table>
      </div>
    );
  }
}

export default ShoppingCart;
