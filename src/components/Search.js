import React from 'react';

const Search = props => (
	<div className="ui input">
		<input type="text" value={props.searchValue} onChange={props.searchCharacters} placeholder="Character Name" />
	</div>
);

export default Search;
