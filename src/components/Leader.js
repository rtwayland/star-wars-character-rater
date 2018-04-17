import React from 'react';
function getLeader(characters) {
	let sortedCharacters = Object.values(characters).sort(
		(a, b) => b.upVotes - b.downVotes - (a.upVotes - a.downVotes)
	);
	let leader = sortedCharacters[0];
	return { name: leader.name, score: leader.upVotes - leader.downVotes };
}
const Leader = props => (
		<div className="leader">
			<span className="name">Han Solo</span>
			<span>Score: 20</span>
		</div>
	);

export default Leader;
