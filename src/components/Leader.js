import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

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
