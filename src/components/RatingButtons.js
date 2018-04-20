import React from 'react';

const RatingButtons = props => (
	<div className="ui three buttons">
		<div className="ui basic green button" onClick={null}>
			+ Up
		</div>
		<div className="ui basic yellow button" onClick={null}>
			- Down
		</div>
		<div className="ui basic red button" onClick={null}>
			Delete
		</div>
	</div>
);

export default RatingButtons;
