import { combineReducers } from 'redux';
import characterReducer from './character_reducer';
import searchReducer from './search_reducer';

const rootReducer = combineReducers({
	characters: characterReducer,
	searchValue: searchReducer
});

export default rootReducer;
