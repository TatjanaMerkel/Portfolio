import "./OnlineShop.css";

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import React from "react";

class OnlineShop extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      products: [],
      priceTypes: [],
      amounts: {},
    };
  }

  addItem(id) {
    let oldCount = Number(localStorage.getItem(String(id)));

    if (!oldCount) {
      oldCount = 0;
    }

    const amounts = this.state.amounts;
    const newCount = oldCount + Number(amounts[id]);
    amounts[id] = 0;
    this.setState({ amounts: amounts });

    localStorage.setItem(String(id), String(newCount));
  }

  async updateProducts(category) {
    const res = await fetch(`http://localhost:3001/products`);
    const products = await res.json();
    this.setState({ products: products });

    const amounts = this.state.amounts;
    for (const product of products) {
      amounts[product.id] = 0;
    }
    this.setState({ amounts: amounts });
  }

  async updatePriceTypes() {
    const res = await fetch("http://localhost:3001/price-types");
    const priceTypes = await res.json();
    this.setState({ priceTypes: priceTypes });
  }

  getPriceTypeDescription(id) {
    const priceTypes = this.state.priceTypes.filter(
      (priceType) => priceType["id"] === id
    );
    if (priceTypes.length > 0) return priceTypes[0]["description"];
    else return "";
  }

  componentDidMount() {
    this.updateProducts(this.state.category);
    this.updatePriceTypes();
  }

  async componentWillReceiveProps(nextProps) {
    await this.setState({ category: nextProps.category });
    this.updateProducts(this.state.category);
  }

  setAmount(id, amount) {
    const amounts = this.state.amounts;
    amounts[id] = amount;
    this.setState({ amounts: amounts });
  }

  render() {
    const cards = this.state.products.map((product) => (
      <Card style={{ width: "18rem", margin: "8px" }}>
        <Card.Img variant="top" src={product["image"]} />
        <Card.Body>
          <Card.Title>{product["name"]}</Card.Title>
          <Card.Text>{product["description"]}</Card.Text>
          <Card.Text>
            <input
              min="1"
              type="number"
              value={this.state.amounts[product.id]}
              onChange={(event) =>
                this.setAmount(product.id, event.target.value)
              }
            />
            {product["price"] / 100} €{" "}
            {this.getPriceTypeDescription(product["price_type"])}{" "}
          </Card.Text>
          <div className="text-center">
            <Button onClick={() => this.addItem(product.id)} variant="primary">
              Warenkorb hinzufügen
            </Button>
          </div>
        </Card.Body>
      </Card>
    ));

    return (
      <div className="content">
        <div style={{ display: "flex", flexWrap: "wrap" }}>{cards}</div>
      </div>
    );
  }
}

export default OnlineShop;
