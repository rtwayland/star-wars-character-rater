import React from 'react';
import { connect } from 'react-redux';
import Character from './Character';

const CharacterList = props => (
	<div className="character-list ui cards">
		{Object.values(props.characters)
			.filter(character => character.name.toLowerCase().includes(props.searchValue.toLowerCase()))
			.map(character => <Character key={character.name} {...character} allowRating />)}
	</div>
);

const mapStateToProps = state => ({
	characters: state.characters,
	searchValue: state.searchValue
});

export default connect(mapStateToProps)(CharacterList);
