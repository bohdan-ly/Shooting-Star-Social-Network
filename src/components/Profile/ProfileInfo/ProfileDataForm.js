import React from 'react';
import { createField, Input } from '../../common/FormsControls/FormsControls';
import { reduxForm } from 'redux-form';
import { Textarea } from './../../common/FormsControls/FormsControls';
import style from './ProfileInfo.module.css';
import s from '../../common/FormsControls/FormsControls.module.css'

export const ProfileDataForm = ({handleSubmit, profile, error}) => {
	return (
		<form onSubmit = {handleSubmit}>
			<button>save</button>
			{ error && <div className = {s.formSummaryError}>
				{error}
			</div>}
			<div>
				<span>
					<b>Full name:</b> {createField('Full name', 'fullName', [], Input)}
				</span>
			</div>
			<div>
				<span>
					<b>Looking for a job:</b> {createField('', 'lookingForAJob', [], Input, { type: 'checkbox' })}
				</span>
			</div>
			<div>
				<span>
					<b>My professionals skills:</b>
					{createField('My professionals skills', 'lookingForAJobDescription', [], Textarea)}
				</span>
			</div>
			<div>
				<span>
					<b>About me:</b>
					{createField('About me', 'aboutMe', [], Textarea)}
				</span>
			</div>
			 <div>
				<span>
					<b>Contacts:</b>{' '}
					{Object.keys(profile.contacts).map((key) => {
						return <div key = {key} className = {style.contact}>
							<b>{key}: {createField(key, 'contacts.' + key, [], Textarea)}</b>
						</div>
					})}
				</span>
			</div>
		</form>
	);
};

const ProfileDataFormReduxForm = reduxForm({ form: 'edit-profile' })(ProfileDataForm);

export default ProfileDataFormReduxForm;
