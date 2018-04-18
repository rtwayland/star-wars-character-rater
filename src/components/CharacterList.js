import React from 'react';
import Context from '../context';
import Character from './Character';

const CharacterList = props => (
	<Context.Consumer>
		{context => (
			<div className="character-list ui cards">
				{Object.values(context.state.characters)
					.filter(character => character.name.toLowerCase().includes(context.state.searchValue.toLowerCase()))
					.map(character => <Character key={character.name} {...character} allowRating />)}
			</div>
		)}
	</Context.Consumer>
);

export default CharacterList;
