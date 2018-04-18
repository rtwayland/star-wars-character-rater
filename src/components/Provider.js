import React, { Component } from 'react';
import axios from 'axios';
import Context from '../context';
import { prepData } from '../utils/data';

class Provider extends Component {
	state = {
		characters: {},
		searchValue: ''
	};
	componentDidMount() {
		const requests = [
			axios.get('https://swapi.co/api/people/?page=1'),
			axios.get('https://swapi.co/api/people/?page=2'),
			axios.get('https://swapi.co/api/people/?page=3'),
			axios.get('https://swapi.co/api/people/?page=4')
		];
		axios
			.all(requests)
			.then(res => {
				let results = res.reduce((acc, cur) => [...acc, ...cur.data.results], []);
				const characters = prepData(results);
				this.setState({ characters });
			})
			.catch(err => {
				if (err) throw err;
			});
	}
	incrementUpVotes = id => {
		let character = { ...this.state.characters[id], upVotes: this.state.characters[id].upVotes + 1 };
		let characters = { ...this.state.characters, [id]: { ...character } };
		this.setState({ characters });
	};
	incrementDownVotes = id => {
		let character = { ...this.state.characters[id], downVotes: this.state.characters[id].downVotes + 1 };
		let characters = { ...this.state.characters, [id]: { ...character } };
		this.setState({ characters });
	};
	deleteCharacter = id => {
		let characters = { ...this.state.characters };
		delete characters[id];
		this.setState({ characters });
	};
	searchCharacters = e => {
		const { value: searchValue } = e.target;
		this.setState({ searchValue });
	};
	render() {
		return (
			<Context.Provider
				value={{
					state: this.state,
					incrementUpVotes: this.incrementUpVotes,
					incrementDownVotes: this.incrementDownVotes,
					deleteCharacter: this.deleteCharacter,
					searchCharacters: this.searchCharacters
				}}
			>
				{this.props.children}
			</Context.Provider>
		);
	}
}

export default Provider;
