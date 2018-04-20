import React from 'react';
import Leader from './Leader';
import Search from './Search';

const Nav = (props) => (
	<nav className="nav-content">
		<Leader name={props.searchValue} />
		<Search searchValue={props.searchValue} setCharacterName={props.setCharacterName} />
	</nav>
);

export default Nav;
