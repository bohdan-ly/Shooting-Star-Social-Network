import React from 'react';
import s from './Navbar.module.css';
import { NavLink } from 'react-router-dom';
//import TopFriends from '../TopFriends/TopFriends'
const Navbar = (props) => {
	return (
		<nav className={s.nav}>
			<div className={s.item}>
				<NavLink to="/profile" activeClassName={s.activeLink}>
					Profile
				</NavLink>
			</div>
			<div className={s.item}>
				<NavLink to="/dialogs" activeClassName={s.activeLink}>
					Messages
				</NavLink>
			</div>
			<div className={s.item}>
				<NavLink to="/users" activeClassName={s.activeLink}>
					Users
				</NavLink>
			</div>
			<div className={s.item}>
				<NavLink to="/news" activeClassName={s.activeLink}>
					News
				</NavLink>
			</div>
		</nav>
	);
};

export default Navbar;
