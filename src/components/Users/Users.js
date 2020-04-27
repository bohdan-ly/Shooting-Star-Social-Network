import React from 'react';
import style from './Users.module.css';
import Paginator from '../common/Paginator/Paginator';
import User from './User';

let Users = ({ currentPage, totalUsersCount, pageSize, onPageChange, users, ...props }) => {
	return (
		<div className={style.content}>
			<Paginator
				currentPage={currentPage}
				onPageChange={onPageChange}
				totalItemsCount={totalUsersCount}
				pageSize={pageSize}
			/>
			<div>
				{users.map((user) => (
					<User
						key={user.id}
						user={user}
						followingInProgress={props.followingInProgress}
						unfollow={props.unfollow}
						follow={props.follow}
					/>
				))}
			</div>
		</div>
	);
};

export default Users;
