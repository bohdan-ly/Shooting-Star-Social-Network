import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom'
import {getUserProfile} from '../../redux/profile-reducer' 
import { compose } from 'redux';
import { getStatus, updateStatus } from './../../redux/profile-reducer';


class ProfileContainer extends React.Component {
componentDidMount(){
	let userId = this.props.match.params.userId
	if(!userId) {
		userId = this.props.authorizedUserId
		if(!userId) {
			this.props.history.push('/login');
		}
	}
	this.props.getUserProfile(userId)
	this.props.getStatus(userId)
}
render(){	
	return (
		<Profile {...this.props} profile = {this.props.profile} status = {this.props.status} updateStatus = {this.props.updateStatus}/>
	)}
};

let mapStateToProps = (state) => ({
	profile: state.profileServerData.profile,
	status: state.profileServerData.status,
	authorizedUserId: state.auth.userId,
	isAuth: state.auth.isAuth,
});

export default compose(
	connect(mapStateToProps, {getUserProfile, getStatus, updateStatus}),
	withRouter,
	//withAuthRedirect
)(ProfileContainer)


