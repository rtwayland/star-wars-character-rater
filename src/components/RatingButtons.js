import React from 'react';
import Context from '../context';

const RatingButtons = props => (
	<Context.Consumer>
		{context => (
			<div className="ui three buttons">
				<div className="ui basic green button" onClick={() => context.incrementUpVotes(props.characterId)}>
					+ Up
				</div>
				<div className="ui basic yellow button" onClick={() => context.incrementDownVotes(props.characterId)}>
					- Down
				</div>
				<div className="ui basic red button" onClick={() => context.deleteCharacter(props.characterId)}>
					Delete
				</div>
			</div>
		)}
	</Context.Consumer>
);

export default RatingButtons;
