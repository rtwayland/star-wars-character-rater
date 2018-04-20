import React from 'react';
import RatingButtons from './RatingButtons';

const Character = props => (
	<div className="character-card card">
		<div className="content">
			<div className="header">Name</div>
			<div className="meta">
				<div>
					UpVotes: <strong>0</strong>
				</div>
				<div>
					DownVotes: <strong>0</strong>
				</div>
			</div>
			<div className="ui list">
				<div className="item">Episodes</div>
			</div>
		</div>
		<div className="extra content">Buttons</div>
	</div>
);

export default Character;
