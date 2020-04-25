import React from 'react';
import { addPostActionCreator } from '../../../redux/profile-reducer';
import MyPosts from './MyPosts';
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
	return {
		posts: state.profileServerData.profileData,
		postInputText: state.profileServerData.postInputText
	}
}

let mapDispatchToProps = (dispatch) => {
	return {
		addPost: (newPostBody) => {
			dispatch(addPostActionCreator(newPostBody));
		},
	}
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps) (MyPosts);

export default MyPostsContainer;


// const MyPostsContainer = () => {
// 	return <StoreContext.Consumer>
// 			{ store => {
// 				debugger
// 				let state = store.getState();
// 				let addPost = () => {
// 					store.dispatch(addPostActionCreator());
// 				};

// 				let onPostChangeText = (text) => {
// 					let action = ;
// 					store.
// 				};
// 				return (
// 					<MyPosts
// 						postChangeText={onPostChangeText}
// 						addPost={addPost}
// 						posts={state.profileServerData.profileData}
// 						postInputText={state.profileServerData.postInputText}
// 					/>
// 				);
// 			}}
// 		</StoreContext.Consumer>
// };