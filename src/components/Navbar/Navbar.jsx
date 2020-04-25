import React from 'react';
import s from './Navbar.module.css';
import { NavLink } from 'react-router-dom';
import { Route } from 'react-router-dom';
import TopFriends from '../TopFriends/TopFriends'
const Navbar = (props) => {
	return (
		<nav className={s.nav}>
			<div className={s.item}>
				<NavLink to="/profile" activeClassName = {s.activeLink}>Profile</NavLink>
			</div>
			<div className={s.item}>
				<NavLink to="/dialogs" activeClassName = {s.activeLink}>Messages</NavLink>
			</div>
			<div className={s.item}>
				<NavLink to="/users" activeClassName = {s.activeLink}>Users</NavLink>
			</div>
			<div className={s.item}>
				<NavLink to="/news" activeClassName = {s.activeLink}>News</NavLink>
			</div>
			<div className={s.item}>
				<NavLink to="/music" activeClassName = {s.activeLink}>Music</NavLink>
			</div>
			<div className={s.item}>
				<NavLink to="/settings" activeClassName = {s.activeLink}>Settings</NavLink>
			</div>
			 {/* <Route path="/profile" render={() => <TopFriends topFriendsData = {props}/>} /> */}
		</nav>
	);
};

export default Navbar;
