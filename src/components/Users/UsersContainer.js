import React from 'react';
import { connect } from 'react-redux';
import { follow, unfollow, setCurrentPage, toggleIsFollowingProcess, requestUsers } from './../../redux/users-reducer';
import Users from './Users';
import Preloader from '../common/preloader/Preloader';
import { compose } from 'redux';
import {
	getUsers,
	getPageSize,
	getTotalUsersCount,
	getCurrentPage,
	getFetching,
	getFollowingInProgress
} from './../../redux/users-selectors';

class UsersAPIComponent extends React.Component {
	componentDidMount() {
		let { currentPage, pageSize } = this.props;
		this.props.requestUsers(currentPage, pageSize);
	}
	onPageChange = (page) => {
		let {pageSize} = this.props;
		this.props.requestUsers(page, pageSize);
	};
	render() {
		return (
			<div>
				{this.props.isFetching ? <Preloader /> : null}
				<Users
					totalUsersCount={this.props.totalUsersCount}
					pageSize={this.props.pageSize}
					currentPage={this.props.currentPage}
					onPageChange={this.onPageChange}
					users={this.props.users}
					unfollow={this.props.unfollow}
					follow={this.props.follow}
					followingInProgress={this.props.followingInProgress}
				/>
			</div>
		);
	}
}

let mapStateToProps = (state) => {
	return {
		users: getUsers(state),
		pageSize: getPageSize(state),
		totalUsersCount: getTotalUsersCount(state),
		currentPage: getCurrentPage(state),
		isFetching: getFetching(state),
		followingInProgress: getFollowingInProgress(state)
	};
};

export default compose(
	//withAuthRedirect,
	connect(mapStateToProps, {
		follow,
		unfollow,
		setCurrentPage,
		// setUsers,
		// setTotalUsersCount,
		// toggleIsFetching,
		toggleIsFollowingProcess,
		requestUsers
	})
)(UsersAPIComponent);

// export default connect(mapStateToProps, {
// 	follow,
// 	unfollow,
// 	// setUsers,
// 	setCurrentPage,
// 	// setTotalUsersCount,
// 	// toggleIsFetching,
// 	toggleIsFollowingProcess,
// 	getUsers
// }) (UsersAPIComponent);

// let mapDispatchToProps = (dispatch) => {
// 	return {
// 		follow: (userId) => {
// 			dispatch(followAC(userId));
// 		},
// 		unfollow: (userId) => {
// 			dispatch(unfollowAC(userId));
// 		},
// 		setUsers: (users) => {
// 			dispatch(setUsers(users));
// 		},
// 		setCurrentPage: (pageNumber) => {
//           dispatch(setCurrentPageAC(pageNumber))
// 		},
// 		setTotalUsersCount: (totalCount) => {
// 			dispatch(setTotalUsersCountAC(totalCount))
// 		  },
// 		  toggleIsFetching: (isFetching) => {
// 			dispatch(toggleIsFetchingAC(isFetching))
// 		  }
// 	}
// }

// 	getUsers(this.props.currentPage ,this.props.pageSize).then((data) => {
// 			this.props.toggleIsFetching(false);
// 			this.props.setUsers(data.items);
// 			this.props.setTotalUsersCount(data.totalCount);
// 		});

// this.props.toggleIsFetching(true);
// this.props.setCurrentPage(page);
// getUsers(page, this.props.pageSize).then((data) => {
// 		this.props.toggleIsFetching(false);
// 		this.props.setUsers(data.items);
// 	});
