import React, { Component } from 'react';

class Search extends Component {
	shouldComponentUpdate(nextProps) {
		return nextProps.searchValue !== this.props.searchValue;
	}
	render() {
		return (
			<div className="ui input">
				<input
					type="text"
					value={this.props.searchValue}
					onChange={this.props.searchCharacters}
					placeholder="Character Name"
				/>
			</div>
		);
	}
}

export default Search;
