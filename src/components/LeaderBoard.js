import React from 'react';
import Character from './Character';

function getLeaders(characters) {
	return Object.values(characters)
		.filter(character => character.upVotes > 0 || character.downVotes > 0)
		.sort((a, b) => b.upVotes - b.downVotes - (a.upVotes - a.downVotes));
}

const LeaderBoard = props => {
	return (
		<div className="leader-board-container">
			<h1>Leader Board</h1>
			<div className="leader-board ui cards">
				Rated Characters
			</div>
		</div>
	);
};

export default LeaderBoard;
