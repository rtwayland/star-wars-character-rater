import React, { Component } from 'react';
import Nav from './components/Nav';

class App extends Component {
	state = {
		searchValue: ''
	};
	render() {
		return (
			<div>
				<Nav searchValue={this.searchValue} />
			</div>
		);
	}
}

export default App;
