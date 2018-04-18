import React, { Component } from 'react';
import Context from '../context';

class Search extends Component {
	render() {
		return (
			<Context.Consumer>
				{context => (
					<div className="ui input">
						<input
							type="text"
							value={context.state.searchValue}
							onChange={context.searchCharacters}
							placeholder="Character Name"
						/>
					</div>
				)}
			</Context.Consumer>
		);
	}
}

export default Search;
