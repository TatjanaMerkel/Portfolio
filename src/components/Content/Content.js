import "./Content.css";

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import React from "react";

class Content extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      category: props.category,
      count: 0,
      vegetables: []
    };
  }

  async updateProducts(category) {
    const res = await fetch(`http://localhost:3001/products?category=${this.state.category}`);
    const vegetables = await res.json();
    this.setState({vegetables: vegetables});
  }

  componentDidMount() {
    this.updateProducts(this.state.category);
  }

  async componentWillReceiveProps(nextProps) {
    await this.setState({category: nextProps.category})
    this.updateProducts(this.state.category);
  }

  render() {
    const cards = this.state.vegetables.map((vegetable) => (
      <Card style={{ width: "18rem", margin: "8px" }}>
        <Card.Img variant="top" src={vegetable["image"]} />
        <Card.Body>
          <Card.Title>{vegetable["title"]}</Card.Title>
          <Card.Text>{vegetable["description"]}</Card.Text>
          <div className="text-center">
            <Button
              onClick={() => this.setState({ count: this.state.count + 1 })}
              variant="primary"
            >
              Warenkorb hinzufügen
            </Button>
          </div>
          <div>Click {this.state.count}</div>
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
