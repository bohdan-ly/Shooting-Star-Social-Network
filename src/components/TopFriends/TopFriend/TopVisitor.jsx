import React from 'react';
import s from './TopVisitor.module.css';


const TopVisitor = (props) => {
	let path = '/dialogs/' + props.id;
	return (
			<div className = {s.userLink}>
			<div className = 'friendAvatar'>
			<img src = {props.avatar} />
			</div>
			</div>
	);
};

export default TopVisitor;
