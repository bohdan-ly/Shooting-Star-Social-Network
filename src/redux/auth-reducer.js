import { authAPI } from '../api(DAL)/api';
import { securityAPI } from '../api(DAL)/api';
import { stopSubmit } from 'redux-form';

const SET_USER_DATA = 'shooting-star/auth/SET_USER_DATA';
const GET_CAPTCHA_URL_SUCCESS = 'shooting-star/auth/GET_CAPTCHA_URL_SUCCESS';

let initialState = {
	userId: null,
	email: null,
	login: null,
	isFetching: true,
	isAuth: false,
	captchaUrl: null //if null, then captcha is not required
};

const authReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_USER_DATA:
		case GET_CAPTCHA_URL_SUCCESS: {
			return { ...state, ...action.payload };
		}
		default:
			return state;
	}
};

export const setAuthUserData = (userId, email, login, isAuth) => ({
	type: SET_USER_DATA,
	payload: { userId, email, login, isAuth }
});

export const getCaptchaUrlSuccess = (captchaUrl) => ({
	type: GET_CAPTCHA_URL_SUCCESS,
	payload: { captchaUrl }
});

export const getAuthUserData = () => async (dispatch) => {
	let response = await authAPI.me();
	if (response.data.resultCode === 0) {
		let { id, login, email } = response.data.data;
		dispatch(setAuthUserData(id, email, login, true));
	}
};

export const login = (email, password, rememberMe, captcha) => async (dispatch) => {
	let response = await authAPI.login(email, password, rememberMe, captcha);
	if (response.data.resultCode === 0) {
		dispatch(getAuthUserData());
	} else {
		if (response.data.resultCode === 10) {
			dispatch(getCaptchaURL());
		}
		let message = response.data.messages.length > 0 ? response.data.messages[0] : 'Some error';
		dispatch(stopSubmit('login', { _error: message }));
	}
};

export const getCaptchaURL = () => async (dispatch) => {
	const response = await securityAPI.getCaptchaURL();
	const captchaURL = response.data.url;
	dispatch(getCaptchaUrlSuccess(captchaURL));
};

export const logout = () => async (dispatch) => {
	let response = await authAPI.logout();

	if (response.data.resultCode === 0) {
		dispatch(setAuthUserData(null, null, null, false));
	}
};
// export const toggleIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching});

export default authReducer;
