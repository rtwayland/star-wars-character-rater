import React from 'react';

const RatingButtons = props => (
	<div className="ui three buttons">
		<div className="ui basic green button" onClick={() => props.incrementUpVotes(props.characterId)}>
			+ Up
		</div>
		<div className="ui basic yellow button" onClick={() => props.incrementDownVotes(props.characterId)}>
			- Down
		</div>
		<div className="ui basic red button" onClick={() => props.deleteCharacter(props.characterId)}>
			Delete
		</div>
	</div>
);

export default RatingButtons;
