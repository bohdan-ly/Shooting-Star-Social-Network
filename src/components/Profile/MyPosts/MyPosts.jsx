import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import {RequiredField, maxLengthCreator} from '../../../utils/validators'
import { Field, reduxForm } from 'redux-form'
import { Textarea } from './../../common/FormsControls/FormsControls';

const maxLength = maxLengthCreator(10);

const AddPostForm = (props) => {
	return (
	<form onSubmit = {props.handleSubmit} className={s.postCreate}>
		<div className={s.inputField}>
			<Field 
			validate = {[RequiredField, maxLength]}
			 component = {Textarea}
			 name = {'newPostBody'}
			 placeholder = {'Enter new post'} />
		</div>
		<div>
			<button>Add Post</button>
			<button>Remove</button>
		</div>
	</form>
)
}
	
	const AddPostFormeRedux = reduxForm({
		form: 'profileAddPostForm'
	  })(AddPostForm)

const MyPosts = React.memo((props) => {
	
	
	let addPost = (values) => {
		props.addPost(values.newPostBody);
	}

	let posts = [...props.posts].reverse().map((dataItem) => <Post key = {dataItem.id} value={dataItem.value} like={dataItem.like} />);
	return (
		<div className={s.content}>
		<AddPostFormeRedux onSubmit = {addPost}/>
			{posts}
		</div>
	);
})

export default MyPosts;


	// let newPostElem = React.createRef();

	// let addPost = () => {
	// 	props.addPost();
	// };

	// let onPostChangeText = () => {
	// 	let text = newPostElem.current.value;
	// 	props.postChangeText(text);
	// };
