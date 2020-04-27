import { usersAPI, profileAPI } from '../api(DAL)/api';
import { stopSubmit } from 'redux-form';

const ADD_POST = 'shooting-star/profile/ADD-POST';
const SET_USER_PROFILE = 'shooting-star/profile/SET_USER_PROFILE';
const SET_STATUS = 'shooting-star/profile/SET_STATUS';
const SAVE_PHOTO_SUCCESS = 'shooting-star/profile/SAVE_PHOTO_SUCCESS';

let initialState = {
		profileData: [
			{ id: 0, value: 'Go play?', like: 100 },
			{ id: 1, value: 'Hello', like: 100 },
			{ id: 2, value: 'Nice day', like: 100 },
			{ id: 3, value: 'Nice day', like: 100 },
			{ id: 4, value: 'Nice day', like: 100 },
			{ id: 5, value: 'Nice day', like: 100 }
		],
		profile: null,
		status: ''
	},
	profileReducer = (state = initialState, action) => {
		switch (action.type) {
			case ADD_POST: {
				let newPost = {
					id: 6,
					value: action.newPostBody,
					like: 100
				};
				return {
					...state,
					profileData: [ ...state.profileData, newPost ]
				};
			}
			case SET_USER_PROFILE: {
				return { ...state, profile: action.profile };
			}
			case SET_STATUS: {
				return { ...state, status: action.status };
			}
			case SAVE_PHOTO_SUCCESS: {
				return { ...state, profile: { ...state.profile, photos: action.photos } };
			}
			default:
				return state;
		}
	};

export const addPostActionCreator = (newPostBody) => ({ type: ADD_POST, newPostBody });

export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile });

export const setStatus = (status) => ({ type: SET_STATUS, status });

export const savePhotoSuccess = (photos) => ({ type: SAVE_PHOTO_SUCCESS, photos });

export const getUserProfile = (userId) => async (dispatch) => {
	let response = await usersAPI.getProfile(userId);
	dispatch(setUserProfile(response.data));
};

export const getStatus = (userId) => async (dispatch) => {
	let response = await profileAPI.getStatus(userId);
	dispatch(setStatus(response.data));
};

export const updateStatus = (status) => async (dispatch) => {
	let response = await profileAPI.updateStatus(status);
	if (response.data.resultCode === 0) {
		dispatch(setStatus(status));
	}
};

export const savePhoto = (file) => async (dispatch) => {
	let response = await profileAPI.savePhoto(file);
	if (response.data.resultCode === 0) {
		dispatch(savePhotoSuccess(response.data.data.photos));
	}
};

export const saveProfile = (profile) => async (dispatch, getState) => {
	const userId = getState().auth.userId;
	const response = await profileAPI.saveProfile(profile);
	if (response.data.resultCode === 0) {
		dispatch(getUserProfile(userId));
	} else {
		dispatch(stopSubmit('edit-profile', { contacts: { facebook: response.data.messages[0] } }));
		return Promise.reject(response.data.messages[0]);
	}
};

// export const postChangeTextActionCreator = (text) => (
// 	{type: UPDATE_INPUT_POST_TEXT, newText: text	});

export default profileReducer;
