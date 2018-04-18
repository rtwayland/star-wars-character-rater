import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Nav from './components/Nav';
import CharacterList from './components/CharacterList';
import LeaderBoard from './components/LeaderBoard';

class App extends Component {
	render() {
		return (
			<Router>
				<div>
					<Nav />
					<div className="ui container character-list-container">
						<Route exact path="/" component={CharacterList} />
						<Route path="/leaders" component={LeaderBoard} />
					</div>
				</div>
			</Router>
		);
	}
}

export default App;
