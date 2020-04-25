import React from 'react';
import style from './ProfileInfo.module.css';
import Preloader from '../../common/preloader/Preloader';
import img from '../../../img/c8d7b982d403d6025c9809c78fbbe6c2.jpg'
//import ProfileStatus from './ProfileStatus'
import ProfileStatusWithHooks from './ProfileStatusWithHooks';

const ProfileInfo = ({profile, status, updateStatus}) => {
		if(!profile) {
		return <Preloader />
		}

	return (
		
		<div className={style.content}>
			<img className={style.backRofl} src= {img} alt = 'post'/>
			<div>
				<img src = {profile.photos.large} />
				<ProfileStatusWithHooks status = {status} updateStatus = {updateStatus}/>

				</div>
		</div>
	);
};

export default ProfileInfo;
