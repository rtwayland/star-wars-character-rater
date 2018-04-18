import React from 'react';
import Context from '../context';
import Character from './Character';

const LeaderBoard = props => (
	<Context.Consumer>
		{context => {
			const leaders = Object.values(context.state.characters)
				.filter(character => character.upVotes > 0 || character.downVotes > 0)
				.sort((a, b) => b.upVotes - b.downVotes - (a.upVotes - a.downVotes))
				.map(character => <Character key={character.name} {...character} allowRating={false} />);
			return (
				<div className="leader-board-container">
					<h1>Leader Board</h1>
					<div className="leader-board ui cards">
						{leaders.length > 0 ? leaders : <div>No characters have been scored</div>}
					</div>
				</div>
			);
		}}
	</Context.Consumer>
);

export default LeaderBoard;
