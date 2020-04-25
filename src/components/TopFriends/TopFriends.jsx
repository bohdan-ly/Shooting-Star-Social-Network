import React from 'react';
import s from './TopFriends.module.css';
import TopVisitor from './TopFriend/TopVisitor'

const TopFriends = (props) => {
let topFriendData = props.topFriendsData.topFriendsData.map((user) => <TopVisitor name={user.name} id={user.id} avatar = {user.avatar} />);
	let path = '/dialogs/' + props.id;
	return (
		<div className={s.dialog + ' ' + s.active}>	
			<h3>Top Friends</h3>
			<div className = 'topFriendList'>
			<div className={s.topFriendData}>{topFriendData} </div>
			</div>
		</div>
	);
};

export default TopFriends;
