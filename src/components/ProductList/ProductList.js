import { Button } from "react-bootstrap";
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
  };

  render() {
    return (
      <table class="table table-bordered">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Produkte</th>
            <th scope="col">Bearbeiten</th>
            <th scope="col">Löschen</th>
          </tr>
        </thead>
        <tbody>
          {this.state.products.map((product, index) => (
            <tr>
              <th scope="row">{product.id}</th>
              <td>{product.name}</td>
              <td>
                <Button onClick={() => this.handleEdit(product.id)}>
                  Bearbeiten
                </Button>
              </td>
              <td>
                <Button onClick={() => this.handleDelete(product.id)}>
                  Löschen
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

export default ProductList;
