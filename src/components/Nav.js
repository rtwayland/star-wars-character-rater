import React from 'react';

const Nav = (props) => (
	<nav className="nav-content">
		<div className="leader">
			<span className="name">Han Solo</span>
			<span>Score: 20</span>
		</div>
		<div className="ui input">
			<input type="text" placeholder="Character Name" />
		</div>
	</nav>
);

export default Nav;
