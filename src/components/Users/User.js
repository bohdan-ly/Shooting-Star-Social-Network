import React from 'react';
import style from './Users.module.css';
import noAvatar from '../../img/user.png';
import { NavLink } from 'react-router-dom';

let User = ({ user, followingInProgress, unfollow, follow }) => {
	return (
		<div>
			<span>
				<div>
					<NavLink to={'/profile/' + user.id} activeClassName={style.link}>
						<img src={user.photos.small != null ? user.photos.small : noAvatar} className={style.avatar} />
					</NavLink>
				</div>
				<div>
					{user.followed ? (
						<button
							disabled={followingInProgress.some((id) => id === user.id)}
							onClick={() => {
								unfollow(user.id);
							}}
						>
							Unfollow
						</button>
					) : (
						<button
							disabled={followingInProgress.some((id) => id === user.id)}
							onClick={() => {
								follow(user.id);
							}}
						>
							Follow
						</button>
					)}
				</div>
			</span>
			<span>
				<span>
					<div>{user.name}</div>
					<div>{user.status}</div>
				</span>
			</span>
		</div>
	);
};

export default User;
