import React, { Component } from 'react';
import { connect } from 'react-redux';
import { searchCharacters } from '../actions';

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

const mapStateToProps = state => ({
	searchValue: state.searchValue
});

export default connect(mapStateToProps, { searchCharacters })(Search);
