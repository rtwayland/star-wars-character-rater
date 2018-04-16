import React, { Component } from 'react';
import Nav from './components/Nav';

class App extends Component {
	state = {
		searchValue: ''
	};
	searchCharacters = e => {
		const { value: searchValue } = e.target;
		this.setState({ searchValue });
	};
	render() {
		return (
			<div>
				<Nav searchValue={this.state.searchValue} searchCharacters={this.searchCharacters} />
			</div>
		);
	}
}

export default App;
