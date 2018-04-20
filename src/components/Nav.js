import React from 'react';
import Leader from './Leader';
import Search from './Search';

const Nav = props => (
	<nav className="nav-content">
		<div className="nav-links">
			<a className="nav-link" href="#">
				Home
			</a>
			<a className="nav-link" href="#">
				Leader Board
			</a>
		</div>
		<Leader characters={props.characters} />
		<Search searchValue={props.searchValue} searchCharacters={props.searchCharacters} />
	</nav>
);

export default Nav;
