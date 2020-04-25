import { usersAPI } from '../api(DAL)/api';
import { updateObjectInArray } from '../utils/objectsHelper';

const FOLLOW = 'shooting-star/users/FOLLOW';
const UNFOLLOW = 'shooting-star/users/UNFOLLOW';
const SET_USERS = 'shooting-star/users/SET_USERS';
const SET_CURRENT_PAGE = 'shooting-star/users/SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'shooting-star/users/SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'shooting-star/users/TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING_PROCESS = 'shooting-star/users/TOGGLE_IS_FOLLOWING_PROCESS ';

let initialState = {
	users: [],
	pageSize: 4,
	totalUsersCount: 0,
	currentPage: 1,
	isFetching: true,
	followingInProgress: []
};

const usersReducer = (state = initialState, action) => {
	switch (action.type) {
		case FOLLOW: {
			return {
				...state,
				users: updateObjectInArray(state.users, action.userID, 'id', { followed: true })
			};
		}
		case UNFOLLOW: {
			return {
				...state,
				users: updateObjectInArray(state.users, action.userID, 'id', { followed: false })
			};
		}
		case SET_USERS: {
			return { ...state, users: action.users };
		}
		case SET_CURRENT_PAGE: {
			return { ...state, currentPage: action.currentPage };
		}
		case SET_TOTAL_USERS_COUNT: {
			return { ...state, totalUsersCount: action.count };
		}
		case TOGGLE_IS_FETCHING: {
			return { ...state, isFetching: action.isFetching };
		}
		case TOGGLE_IS_FOLLOWING_PROCESS: {
			return {
				...state,
				followingInProgress: action.isFetching
					? [ ...state.followingInProgress, action.userId ]
					: state.followingInProgress.filter((id) => id != action.userId)
			};
		}
		default:
			return state;
	}
};

export const followSuccess = (userID) => ({ type: FOLLOW, userID });

export const unfollowSuccess = (userID) => ({ type: UNFOLLOW, userID });

export const setUsers = (users) => ({ type: SET_USERS, users });

export const setCurrentPage = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage });

export const setTotalUsersCount = (totalUsersCount) => ({ type: SET_TOTAL_USERS_COUNT, count: totalUsersCount });

export const toggleIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching });

export const toggleIsFollowingProcess = (isFetching, userId) => ({
	type: TOGGLE_IS_FOLLOWING_PROCESS,
	isFetching,
	userId
});

export const requestUsers = (currentPage, pageSize) => {
	return async (dispatch) => {
		dispatch(toggleIsFetching(true));

		let data = await usersAPI.getUsers(currentPage, pageSize);

		dispatch(toggleIsFetching(false));
		dispatch(setUsers(data.items));
		dispatch(setTotalUsersCount(data.totalCount));
		dispatch(setCurrentPage(currentPage));
	};
};

const followUnfollowFlow = async (dispatch, userId, apiMethod, actionCreator) => {
	dispatch(toggleIsFollowingProcess(true, userId));
	let response = await apiMethod(userId);
	if (response.data.resultCode === 0) {
		dispatch(actionCreator(userId));
	}
	dispatch(toggleIsFollowingProcess(false, userId));
};

export const follow = (userId) => {
	return async (dispatch) => {
		followUnfollowFlow(dispatch, userId, usersAPI.follow.bind(usersAPI), followSuccess);
	};
};

export const unfollow = (userId) => {
	return async (dispatch) => {
		followUnfollowFlow(dispatch, userId, usersAPI.unfollow.bind(usersAPI), unfollowSuccess);
	};
};

export default usersReducer;
