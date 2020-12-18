import React from "react";
import { Button } from "react-bootstrap";
import { useHistory } from 'react-router-dom';

class ProductList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      products: [],
    };
  }

  async componentDidMount() {
    const res = await fetch("http://localhost:3001/products/");
    const products = await res.json();
    this.setState({ products: products });
  }

  async handleDelete(id) {
    console.log(id);
    const res = await fetch(`http://localhost:3001/product/${id}`, {
      method: "DELETE",
    });

    const newProducts = this.state.products.filter(function (obj) {
      return obj.id !== id;
    });

    this.setState({ products: newProducts });

    console.log(this.state.products);

    console.log("Delete result: ");
    console.log(res);
  }

  handleEdit = (id) => {
    this.props.history.push(`/admin/edit-product/${id}`);
  }

  render() {
    return (
      <ul>
        {this.state.products.map((product, index) => (
          <li>
            {product.id} {product.name}
            <Button onClick={() => this.handleEdit(product.id)}>
              Edit
            </Button>{" "}
            <Button onClick={() => this.handleDelete(product.id)}>
              Delete
            </Button>
          </li>
        ))}
      </ul>
    );
  }
}

export default ProductList;
