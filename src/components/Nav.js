import React from 'react';
import Leader from './Leader';
import Search from './Search';

const Nav = (props) => (
	<nav className="nav-content">
		<Leader />
		<Search />
	</nav>
);

export default Nav;
