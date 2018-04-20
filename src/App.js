import React, { Component } from 'react';
import Nav from './components/Nav';

class App extends Component {
	state = {
		searchValue: ''
	};
	setCharacterName = searchValue => {
		this.setState({ searchValue });
	};
	render() {
		return (
			<div>
				<Nav
					searchValue={this.state.searchValue}
					setCharacterName={this.setCharacterName}
				/>
			</div>
		);
	}
}

export default App;
