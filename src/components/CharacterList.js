import React from 'react';
import Character from './Character';

const CharacterList = props => (
	<div className="character-list ui cards">
		{Object.values(props.characters)
			.filter(character => character.name.toLowerCase().includes(props.searchValue.toLowerCase()))
			.map(character => (
				<Character
					key={character.name}
					{...character}
					incrementUpVotes={props.incrementUpVotes}
					incrementDownVotes={props.incrementDownVotes}
					deleteCharacter={props.deleteCharacter}
				/>
			))}
	</div>
);

export default CharacterList;
