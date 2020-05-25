import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Home extends Component {
    render() {
        return (
            <div className="container text-center">
                <h1>Welcome to the Quotes Page</h1>
                <p>To check quotes, click <Link to="/quotes">here</Link></p>
            </div>
        )
    }
}