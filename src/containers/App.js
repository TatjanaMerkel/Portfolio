import React from "react";
import Header from "../components/Header/Header";
import "./App.css";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";


class App extends React.Component {

    addShoppingCard() {
        console.log('Add');
    }


  state = {
    vegetables: [
      {
        id: 1,
        title: "Papaya",
        description: "Papayas are great",
        image:
          "https://5.imimg.com/data5/GG/CC/VN/SELLER-47385627/fresh-high-quality-papaya-500x500.jpg",
      },
      {
        id: 2,
        title: "Banana",
        description: "Tati is great",
        image:
          "https://images-na.ssl-images-amazon.com/images/I/61fZ%2BYAYGaL._SX679_.jpg",
      },
      {
        id: 3,
        title: "Blueberry",
        description: "Blueberries are great",
        image:
          "https://5.imimg.com/data5/RI/NH/MY-50344271/natural-fresh-blueberry-500x500.jpg",
      },
    ],
  };

  render() {
    const cards = this.state.vegetables.map((vegetable) => (
      <Card style={{ width: "18rem", margin: "8px" }}>
        <Card.Img variant="top" src={vegetable["image"]} />
        <Card.Body>
          <Card.Title>{vegetable["title"]}</Card.Title>
          <Card.Text>{vegetable["description"]}</Card.Text>
        <div className="text-center">
            <Button onClick={this.addShoppingCard} variant="primary">Warenkorb hinzufügen</Button>
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

        <Header />
        <div className="content">
          <div style={{ display: "flex", flexWrap: "wrap" }}>{cards}</div>
        </div>
      </div>
    );
  }
}

export default App;
