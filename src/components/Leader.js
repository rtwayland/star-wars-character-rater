import React, { memo } from 'react';
function getLeader(characters) {
	let sortedCharacters = Object.values(characters).sort(
		(a, b) => b.upVotes - b.downVotes - (a.upVotes - a.downVotes)
	);
	let leader = sortedCharacters[0] || { name: '', upVotes: 0, downVotes: 0 };
	return { name: leader.name, score: leader.upVotes - leader.downVotes };
}
const Leader = ({ characters })=>{
		const leader = getLeader(characters);
		return (
			<div className="leader">
				<span className="name">{leader.score > 0 ? leader.name : 'Leader Name'}</span>
				<span>Score: {leader.score > 0 ? leader.score : ''}</span>
			</div>
		);
}

export default memo(Leader);
