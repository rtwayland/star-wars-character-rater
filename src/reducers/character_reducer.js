import { prepData } from '../utils/data';
import { FETCH_CHARACTERS, INCREMENT_UP_VOTES, INCREMENT_DOWN_VOTES, DELETE_CHARACTER } from '../actions';

export default function (state = {}, action) {
	switch (action.type) {
		case FETCH_CHARACTERS:
			const results = action.payload.reduce((acc, cur) => [...acc, ...cur.data.results], []);
			const allCharacters = prepData(results);
			return { ...allCharacters };
		case INCREMENT_UP_VOTES:
			return {
				...state,
				[action.payload]: { ...state[action.payload], upVotes: state[action.payload].upVotes + 1 }
			};
		case INCREMENT_DOWN_VOTES:
			return {
				...state,
				[action.payload]: { ...state[action.payload], downVotes: state[action.payload].downVotes + 1 }
			};
		case DELETE_CHARACTER:
			const id = action.payload;
			const characters = { ...state };
			delete characters[id];
			return { ...characters };
		default:
			return state;
	}
};