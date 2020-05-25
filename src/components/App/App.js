import React from 'react';
import './App.css';
import Home from "./../Home/Home";
import Quotes from "./../Quotes/Quotes";
import Navbar from "./../Navbar/Navbar";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
    return (
    	<div>
    		<Router>
    			<Navbar />
				<Switch>
					<Route path="/quotes" component={Quotes} />
					<Route exact path="/" component={Home} />
				</Switch>
			</Router>  
    	</div>
    );
}

export default App;
