import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import axios from 'axios';
import { prepData } from './utils/data';
import Nav from './components/Nav';
import CharacterList from './components/CharacterList';
import LeaderBoard from './components/LeaderBoard';

function App(props) {
	const charactersFromStorage = sessionStorage.getItem('characters');
	const initialCharacters = charactersFromStorage
		? JSON.parse(charactersFromStorage)
		: {};
	const [searchValue, setSearchValue] = useState('');
	const [characters, setCharacters] = useState(initialCharacters);

	useEffect(() => {
		if (!Object.keys(characters).length) {
			const requests = [
				axios.get('https://swapi.co/api/people/?page=1'),
				axios.get('https://swapi.co/api/people/?page=2'),
				axios.get('https://swapi.co/api/people/?page=3'),
				axios.get('https://swapi.co/api/people/?page=4')
			];
			axios.all(requests).then(res => {
				const results = res.reduce(
					(acc, cur) => [...acc, ...cur.data.results],
					[]
				);
				const characters = prepData(results);
				sessionStorage.setItem('characters', JSON.stringify(characters));
				setCharacters(characters);
			});
		}
	}, []);

	const searchCharacters = e => {
		const { value: searchValue } = e.target;
		setSearchValue(searchValue);
	};
	const incrementUpVotes = id => {
		const updatedCharacters = {
			...characters,
			[id]: {
				...characters[id],
				upVotes: characters[id].upVotes + 1
			}
		};
		setCharacters(updatedCharacters);
	};
	const incrementDownVotes = id => {
		const updatedCharacters = {
			...characters,
			[id]: {
				...characters[id],
				downVotes: characters[id].downVotes + 1
			}
		};
		setCharacters(updatedCharacters);
	};
	const deleteCharacter = id => {
		const updatedCharacters = { ...characters };
		delete updatedCharacters[id];
		setCharacters(updatedCharacters);
	};
	return (
		<Router>
			<div>
				<Nav
					characters={characters}
					searchValue={searchValue}
					searchCharacters={searchCharacters}
				/>
				<div className="ui container character-list-container">
					<Route
						exact
						path="/"
						render={() => (
							<CharacterList
								characters={characters}
								searchValue={searchValue}
								incrementUpVotes={incrementUpVotes}
								incrementDownVotes={incrementDownVotes}
								deleteCharacter={deleteCharacter}
							/>
						)}
					/>
					<Route
						path="/leaders"
						render={() => <LeaderBoard characters={characters} />}
					/>
				</div>
			</div>
		</Router>
	);
}

export default App;
