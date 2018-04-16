import React from 'react';
import Leader from './Leader';
import Search from './Search';

const Nav = (props) => (
	<nav className="nav-content">
		<Leader />
		<Search searchValue={props.searchValue} searchCharacters={props.searchCharacters} />
	</nav>
);

export default Nav;