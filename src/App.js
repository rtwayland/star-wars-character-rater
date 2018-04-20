import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import axios from 'axios';
import { prepData } from './utils/data';
import Nav from './components/Nav';
import CharacterList from './components/CharacterList';
import LeaderBoard from './components/LeaderBoard';

class App extends Component {
	state = {
		searchValue: '',
		characters: {}
	};

	componentDidMount() {
		const requests = [
			axios.get('https://swapi.co/api/people/?page=1'),
			axios.get('https://swapi.co/api/people/?page=2'),
			axios.get('https://swapi.co/api/people/?page=3'),
			axios.get('https://swapi.co/api/people/?page=4')
		];
		axios.all(requests).then(res => {
			const results = res.reduce((acc, cur) => [...acc, ...cur.data.results], []);
			const characters = prepData(results);
			this.setState({ characters });
		});
	}

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
					characters={this.state.characters}
					searchValue={this.state.searchValue}
					searchCharacters={this.searchCharacters}
				/>
				<div className="ui container character-list-container">
					<CharacterList
						characters={this.state.characters}
						searchValue={this.state.searchValue}
						incrementUpVotes={this.incrementUpVotes}
						incrementDownVotes={this.incrementDownVotes}
						deleteCharacter={this.deleteCharacter}
					/>
				</div>
			</div>
		);
	}
}

export default App;
