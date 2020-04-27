import React, { useState } from 'react';
import style from './ProfileInfo.module.css';
import Preloader from '../../common/preloader/Preloader';
import userIcon from '../../../img/user.png';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';
import ProfileDataFormReduxForm from './ProfileDataForm';

const ProfileInfo = ({ isOwner, profile, status, updateStatus, savePhoto, saveProfile }) => {
	let [ editMode, setEditMode ] = useState(false);

	if (!profile) {
		return <Preloader />;
	}

	const onSubmit = (formData) => {
		saveProfile(formData).then(() => {
			return setEditMode(false);
		});
	};

	const mainPhotoSelected = (e) => {
		if (e.target.files.length) {
			savePhoto(e.target.files[0]);
		}
	};

	return (
		<div className={style.content}>
			{/* <img className={style.backRofl} src= {img} alt = 'post'/> */}
			<div>
				<img src={profile.photos.large || userIcon} className={style.mainPhoto} alt="photos large" />
				{isOwner && editMode && <input type="file" onChange={mainPhotoSelected} />}
				{editMode ? (
					<ProfileDataFormReduxForm initialValues={profile} profile={profile} onSubmit={onSubmit} />
				) : (
					<ProfileData
						profile={profile}
						isOwner={isOwner}
						goToEditMode={() => {
							setEditMode(true);
						}}
					/>
				)}

				<ProfileStatusWithHooks status={status} updateStatus={updateStatus} />
			</div>
		</div>
	);
};

const ProfileData = ({ profile, isOwner, goToEditMode }) => {
	return (
		<div>
			{isOwner && <button onClick={goToEditMode}>edit</button>}
			<div>
				<span>
					<b>Full name:</b> {profile.fullName}
				</span>
			</div>
			<div>
				<span>
					<b>Looking for a job:</b> {profile.lookingForAJob ? 'yes' : 'no'}
				</span>
			</div>
			{profile.lookingForAJob && (
				<div>
					<span>
						<b>My professionals skills:</b> {profile.lookingForAJobDescription}
					</span>
				</div>
			)}
			<div>
				<span>
					<b>About me:</b> {profile.aboutMe}
				</span>
			</div>
			<div>
				<span>
					<b>Contacts:</b>{' '}
					{Object.keys(profile.contacts).map((key) => {
						if (!!profile.contacts[key]) {
							return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]} />;
						}
					})}
				</span>
			</div>
		</div>
	);
};

const Contact = ({ contactTitle, contactValue }) => {
	return (
		<div>
			<span>
				<b>{contactTitle}:</b> {contactValue}
			</span>
		</div>
	);
};

export default ProfileInfo;
