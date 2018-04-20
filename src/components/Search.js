import React from 'react';

const Search = props => (
	<div className="ui input">
		<input 
			type="text" 
			value={props.searchValue} 
			placeholder="Character Name" 
			onChange={null} 
		/>
	</div>
);

export default Search;
