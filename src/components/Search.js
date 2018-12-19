import React, { memo } from 'react';

const Search = ({ searchValue, searchCharacters }) => (
	<div className="ui input">
		<input
			type="text"
			value={searchValue}
			onChange={searchCharacters}
			placeholder="Character Name"
		/>
	</div>
);

export default memo(
	Search,
	(old, newProps) => old.searchValue === newProps.searchValue
);
