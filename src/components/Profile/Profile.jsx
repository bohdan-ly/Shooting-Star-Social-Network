import React from 'react';
import s from './Profile.module.css';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = ({ isOwner, profile, status, updateStatus, savePhoto, saveProfile}) => {
	return (
		<div className={s.content}>
			<ProfileInfo
				savePhoto={savePhoto}
				isOwner={isOwner}
				profile={profile}
				status={status}
				saveProfile = {saveProfile}
				updateStatus={updateStatus}
			/>
			<MyPostsContainer />
		</div>
	);
};

export default Profile;
