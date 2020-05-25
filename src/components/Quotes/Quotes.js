import React, { Component } from 'react';
import axios from "axios";
import "./Quotes.css";

export default class Quotes extends Component {
	state = {
		loading: false,
		quote: '',
		author: ''
	}

	componentDidMount() {
	    this.getQuote()
	}
    
	getQuote = () => {
		axios.get('https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json')
		.then(res => {
			let quotes = res.data.quotes;
			let randomNumber = Math.floor(Math.random() * quotes.length);
			let randomQuote = quotes[randomNumber];

			this.setState({
				loading: true,
                quote: randomQuote['quote'],
                author: randomQuote['author']
            })
		})
	}

	getNewQuote = () => {
      this.getQuote()
    }

    render() {
    	const { quote, author, loading } = this.state;
    	if (loading === false) {
			return (
				<div className="container">
					<h1>Loading ...</h1>
				</div>
			);
		}
        return (
            <div className="container">
                <h1>Random Quotes</h1>
                <div className="quote-wrapper">
                	<p className="quote"><q>{quote}</q></p>
                	<h4 className="author">{author}</h4>
                </div>
                <div className="text-center">
                	<button className='btn-quote' onClick={this.getNewQuote}>Get New Quote</button>
                </div>
            </div>
        )
    }
}