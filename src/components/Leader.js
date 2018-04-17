import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

function getLeader(characters) {
	let sortedCharacters = Object.values(characters).sort(
		(a, b) => b.upVotes - b.downVotes - (a.upVotes - a.downVotes)
	);
	let leader = sortedCharacters[0];
	return { name: leader.name, score: leader.upVotes - leader.downVotes };
}
class Leader extends PureComponent {
	render() {
		const leader = getLeader(this.props.characters);
		return (
			<div className="leader">
				<span className="name">{leader.score > 0 ? leader.name : 'Leader Name'}</span>
				<span>Score: {leader.score > 0 ? leader.score : ''}</span>
			</div>
		);
	}
}

const mapStateToProps = state => ({
	characters: state.characters
});

export default connect(mapStateToProps)(Leader);
