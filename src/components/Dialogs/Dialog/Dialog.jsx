import React from 'react';
import s from './Dialog.module.css';
import { NavLink } from 'react-router-dom';

const DialogField = (props) => {

	let path = '/dialogs/' + props.id;
	return (
		<div className={s.dialog + ' ' + s.active}>	
			<div className = {s.userLink}>
			<img src = {props.avatar} />
			<NavLink to={path}>{props.name}</NavLink>
			</div>
		</div>
	);
};

export default DialogField;
