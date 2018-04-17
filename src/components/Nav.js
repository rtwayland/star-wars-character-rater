import React from 'react';
import { NavLink } from 'react-router-dom';
import Leader from './Leader';
import Search from './Search';

const Nav = props => (
	<nav className="nav-content">
		<div className="nav-links">
			<NavLink className="nav-link" activeClassName="active" exact to="/">
				Home
			</NavLink>
			<NavLink className="nav-link" activeClassName="active" to="/leaders">
				Leader Board
			</NavLink>
		</div>
		<Leader />
		<Search />
	</nav>
);

export default Nav;
