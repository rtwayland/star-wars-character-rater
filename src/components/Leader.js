import React from 'react';

const Leader = props => (
	<div className="leader">
		<span className="name">{props.name ? props.name : 'Character'}</span>
		<span>Score: 20</span>
	</div>
);

export default Leader;
