import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom'
import Header from '../components/Header/Header'
import Section from '../components/Section'
import Footer from '../components/Footer'
import './App.css'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import papaya from './Papaya.jpg'

class App extends React.Component {

    state = {
        vegetables: [
            {
                'id': 1,
                'title': 'Papaya',
                'description': 'Papayas are great',
                'image': 'https://5.imimg.com/data5/GG/CC/VN/SELLER-47385627/fresh-high-quality-papaya-500x500.jpg'
            },
            {
                'id': 2,
                'title': 'Banana',
                'description': 'Tati is great',
                'image': 'https://images-na.ssl-images-amazon.com/images/I/61fZ%2BYAYGaL._SX679_.jpg'
            },
            {
                'id': 3,
                'title': 'Blueberry',
                'description': 'Blueberries are great',
                'image': 'https://5.imimg.com/data5/RI/NH/MY-50344271/natural-fresh-blueberry-500x500.jpg'
            }
        ]
    }

    render() {
        const cards = this.state.vegetables.map((vegetable) =>
            <Card style={{width: '18rem', margin: '8px'}}>
                <Card.Img variant="top" src={vegetable['image']}/>
                <Card.Body>
                    <Card.Title>{vegetable['title']}</Card.Title>
                    <Card.Text>
                        {vegetable['description']}
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
        )

        return (
            <div>
                <script src="https://unpkg.com/react/umd/react.production.min.js" crossOrigin></script>

                <script
                    src="https://unpkg.com/react-dom/umd/react-dom.production.min.js"
                    crossOrigin></script>

                <script
                    src="https://unpkg.com/react-bootstrap@next/dist/react-bootstrap.min.js"
                    crossOrigin></script>

                <script>var Alert = ReactBootstrap.Alert;</script>

                <div id="navbar" className='sticky' style={{zIndex: '1000'}}>
                    <a className="active" style={{marginRight: '100px'}}>Gemüse</a>
                    <a>Obst</a>
                    <a>Schokolade</a>

                </div>
                <div className="content">
                    <div style={{display: 'flex', flexWrap: 'wrap'}}>

                        {cards}
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
