import axios from 'axios';
export const FETCH_CHARACTERS = 'FETCH_CHARACTERS';
export const INCREMENT_UP_VOTES = 'INCREMENT_UP_VOTES';
export const INCREMENT_DOWN_VOTES = 'INCREMENT_DOWN_VOTES';
export const DELETE_CHARACTER = 'DELETE_CHARACTER';
export const SET_SEARCH_VALUE = 'SET_SEARCH_VALUE';

export const fetchCharacters = () => {
	const requests = [
		axios.get('https://swapi.co/api/people/?page=1'),
		axios.get('https://swapi.co/api/people/?page=2'),
		axios.get('https://swapi.co/api/people/?page=3'),
		axios.get('https://swapi.co/api/people/?page=4')
	];
	let requestsResult = axios.all(requests);
	return {
		type: FETCH_CHARACTERS,
		payload: requestsResult
	};
};

export const incrementUpVotes = id => ({
	type: INCREMENT_UP_VOTES,
	payload: id
});
export const incrementDownVotes = id => ({
	type: INCREMENT_DOWN_VOTES,
	payload: id
});
export const deleteCharacter = id => ({
	type: DELETE_CHARACTER,
	payload: id
});
export const searchCharacters = searchValue => ({
	type: SET_SEARCH_VALUE,
	payload: searchValue
});
