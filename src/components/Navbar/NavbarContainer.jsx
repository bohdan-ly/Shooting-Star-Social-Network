// import React from 'react';
// import s from './Navbar.module.css';
// import { NavLink } from 'react-router-dom';
// import { Route } from 'react-router-dom';
// import TopFriends from '../TopFriends/TopFriends'

// export default Navbar;
// import React from 'react';
// import Profile from './Profile';
// import * as axios from 'axios';
// import { connect } from 'react-redux';
// import {setUserProfile} from '../../redux/profile-reducer'
// import {withRouter} from 'react-router-dom'

// class NavbarContainer extends React.Component {
// componentDidMount(){
// 	let userId = this.props.match.params.userId
// 	axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
// 			.then( response => {
// 				this.props.setUserProfile(response.data);	
// 			});
// }
// render(){	
// 	return (
// 		<Profile {...this.props} profile = {this.props.profile}/>
// 	)}
// };

// let mapStateToProps = (state) => ({
// 	profile: state.profileServerData.profile
// });

// let WithUrlDataContainerComponent = withRouter(NavbarContainer);

// export default connect(mapStateToProps, {setUserProfile})(WithUrlDataContainerComponent);
