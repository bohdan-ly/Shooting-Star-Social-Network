import React, {useState, useEffect} from 'react';
import s from './ProfileInfo.module.css';

const ProfileStatusWithHooks = (props) => { 

	let [editMode, setEditMode] = useState(false);
	let [status, setStatus] = useState(props.status);

	useEffect(() => {
		setStatus(props.status);
	}, [props.status])

	const activateEditMode = () => {
		setEditMode({
			editMode: true
		});
	};

	const deactivateEditMode = () => {
		setEditMode(false);
		props.updateStatus(status);
	};

	const onStatusChange = (e) => {
		setStatus(e.currentTarget.value);
	};


	return (
		<div>
				{!editMode &&
				<div className={s.content}>
				<b>Status:</b>	<span onDoubleClick={activateEditMode}>{props.status || '-----'} </span>
				</div>
}
				{editMode && 
				<div className={s.content}>
					<input
						onChange={onStatusChange}
						autoFocus={true}
						onBlur={deactivateEditMode}
						value={status}
					/>
				</div>}
			
		</div>
	);
}

export default ProfileStatusWithHooks;
