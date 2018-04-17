import React from 'react';
import Character from './Character';

const LeaderBoard = props => {
	const leaders = Object.values(props.characters)
		.filter(character => character.upVotes - character.downVotes !== 0)
		.sort((a, b) => {
			let aScore = a.upVotes - a.downVotes;
			let bScore = b.upVotes - b.downVotes;
			return bScore - aScore;
		})
		.map(character => <Character key={character.name} {...character} allowRating={false} />);
	return (
		<div className="leader-board-container">
			<h1>Leader Board</h1>
			<div className="leader-board ui cards">
				{leaders.length > 0 ? leaders : <div>No characters have been scored</div>}
			</div>
		</div>
	);
};

export default LeaderBoard;
