import React from "react";
import "./Content.css";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

class Content extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      category: props.category,
      vegetables: [],
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
    const res = await fetch(
      `http://localhost:3001/products?category=${this.state.category}`
    );
    const vegetables = await res.json();
    console.log(vegetables);
    this.setState({ vegetables: vegetables });

    const amounts = this.state.amounts;
    for (const vegetable of vegetables) {
      amounts[vegetable.id] = 0;
    }
    this.setState({ amounts: amounts });
    console.log(this.state.amounts);
  }

  async updatePriceTypes() {
    const res = await fetch("http://localhost:3001/price-types");
    const priceTypes = await res.json();
    console.log(priceTypes);
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
    const cards = this.state.vegetables.map((vegetable) => (
      <Card style={{ width: "18rem", margin: "8px" }}>
        <Card.Img variant="top" src={vegetable["image"]} />
        <Card.Body>
          <Card.Title>{vegetable["name"]}</Card.Title>
          <Card.Text>{vegetable["description"]}</Card.Text>
          <Card.Text>
            <input
              min="1"
              type="number"
              value={this.state.amounts[vegetable.id]}
              onChange={(event) =>
                this.setAmount(vegetable.id, event.target.value)
              }
            />
            {vegetable["price"] / 100} €{" "}
            {this.getPriceTypeDescription(vegetable["price_type"])}{" "}
          </Card.Text>
          <div className="text-center">
            <Button
              onClick={() => this.addItem(vegetable.id)}
              variant="primary"
            >
              Warenkorb hinzufügen
            </Button>
          </div>
        </Card.Body>
      </Card>
    ));

    return (
      <div>
        <script
          src="https://unpkg.com/react/umd/react.production.min.js"
          crossOrigin
        ></script>

        <script
          src="https://unpkg.com/react-dom/umd/react-dom.production.min.js"
          crossOrigin
        ></script>

        <script
          src="https://unpkg.com/react-bootstrap@next/dist/react-bootstrap.min.js"
          crossOrigin
        ></script>

        <script>var Alert = ReactBootstrap.Alert;</script>

        <div className="content">
          <div style={{ display: "flex", flexWrap: "wrap" }}>{cards}</div>
        </div>
      </div>
    );
  }
}

export default Content;
