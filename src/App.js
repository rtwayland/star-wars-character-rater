import React, { Component } from 'react';
import Nav from './components/Nav';

class App extends Component {
	state = {
		searchValue: '',
		characters: {
			1: {
				id: 1,
				name: 'Luke Skywalker',
				films: ['Episode 4', 'Episode 5', 'Episode 6'],
				upVotes: 0,
				downVotes: 0
			},
			2: {
				id: 2,
				name: 'Han Solo',
				films: ['Episode 4', 'Episode 5', 'Episode 6'],
				upVotes: 0,
				downVotes: 0
			},
			3: {
				id: 3,
				name: 'Leia Organa',
				films: ['Episode 4', 'Episode 5', 'Episode 6'],
				upVotes: 0,
				downVotes: 0
			},
			4: {
				id: 4,
				name: 'Chewbacca',
				films: ['Episode 4', 'Episode 5', 'Episode 6'],
				upVotes: 0,
				downVotes: 0
			}
		}
	};
	searchCharacters = e => {
		const { value: searchValue } = e.target;
		this.setState({ searchValue });
	};
	incrementUpVotes = id => {
		const characters = {
			...this.state.characters,
			[id]: { ...this.state.characters[id], upVotes: this.state.characters[id].upVotes + 1 }
		};
		this.setState({ characters });
	};
	incrementDownVotes = id => {
		const characters = {
			...this.state.characters,
			[id]: { ...this.state.characters[id], downVotes: this.state.characters[id].downVotes + 1 }
		};
		this.setState({ characters });
	};
	deleteCharacter = id => {
		const characters = { ...this.state.characters };
		delete characters[id];
		this.setState({ characters });
	};
	render() {
		return (
			<div>
				<Nav
					searchValue={this.state.searchValue}
					searchCharacters={this.searchCharacters}
				/>
				<div className="ui container character-list-container">Character List</div>
			</div>
		);
	}
}

export default App;
