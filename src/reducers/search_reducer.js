import { SET_SEARCH_VALUE } from '../actions';

export default function  (state = '', action) {
	switch (action.type) {
		case SET_SEARCH_VALUE:
			return action.payload;
		default:
			return state;
	}
};