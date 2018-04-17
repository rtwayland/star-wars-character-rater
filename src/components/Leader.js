import React from 'react';
function getLeader(characters) {
	let leader = {
		name: '',
		score: 0
	};
	Object.values(characters).forEach(character => {
		if (character.upVotes - character.downVotes > leader.score) {
			leader.name = character.name;
			leader.score = character.upVotes - character.downVotes;
		}
	});
	return leader;
}
const Leader = props => (
		<div className="leader">
			<span className="name">Han Solo</span>
			<span>Score: 20</span>
		</div>
	);

export default Leader;
