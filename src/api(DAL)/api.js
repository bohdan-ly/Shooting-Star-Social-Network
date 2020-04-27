import React from 'react';
import * as axios from 'axios';
import { login } from '../redux/auth-reducer';

const instance = axios.create({
	withCredentials: true,
	baseURL: 'https://social-network.samuraijs.com/api/1.0/',
	headers: {
		'API-KEY': '82f62e6e-b573-40bf-bcad-772ebf2609de'
	}
});

export const usersAPI = {
	getUsers(currentPage = 1, pageSize = 10) {
		return instance.get(`users?page=${currentPage}&count=${pageSize}`).then((response) => {
			return response.data;
		});
	},
	follow(userId) {
		return instance.post(`follow/${userId}`);
	},
	unfollow(userId) {
		return instance.delete(`follow/${userId}`);
	},
	getProfile(userId) {
		console.warn('Obsolete method');
		return profileAPI.getProfile(userId);
	}
};

export const profileAPI = {
	getProfile(userId) {
		return instance.get(`profile/` + userId);
	},
	getStatus(userId) {
		return instance.get(`profile/status/` + userId);
	},
	updateStatus(status) {
		return instance.put(`profile/status/`, { status: status });
	},
	savePhoto(photoFile) {
		const formData = new FormData();
		formData.append('image', photoFile);
		return instance.post('profile/photo/', formData, {
			headers: {
				'Content-Type': 'multipart/form-data'
			}
		});
	},
	saveProfile(profile) {
		return instance.put('profile', profile);
	}
};

export const authAPI = {
	me() {
		return instance.get(`auth/me`);
	},
	login(email, password, rememberMe = false, captcha = null) {
		return instance.post(`auth/login`, { email, password, rememberMe, captcha });
	},
	logout() {
		return instance.delete(`auth/login`);
	}
};

export const securityAPI = {
	getCaptchaURL() {
		return instance.get(`security/get-captcha-url`);
	}
};
