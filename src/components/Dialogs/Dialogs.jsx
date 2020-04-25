import React from 'react';
import DialogField from './Dialog/Dialog';
import s from './Dialogs.module.css';
import Message from './Message/Message';
import { Redirect } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form'
import { Textarea } from '../common/FormsControls/FormsControls'
import {RequiredField, maxLengthCreator} from '../../utils/validators'



const Dialogs = (props) => {
//  let newMessageBody = props.newMessageBody;
let sendMessage = (values) => {
	props.sendMessageCreator(values.newMessageBody);
}
	let dialogsItems = props.dialogs.map((dialog) => (
		<DialogField name={dialog.name} id={dialog.id} key = {dialog.id} avatar={dialog.avatar} />
	));
	let messagesItems = props.messages.map((message) => (
		<Message content={message.content} messageInputText={message.messageInputText} key = {message.id} dispatch={props.dispatch} />
	));

	if(!props.isAuth) return <Redirect to = {'/login'}/>;
	return (
		<div className={s.content}>
			<div className={s.dialogsItems}>{dialogsItems} </div>
			<div className={s.messageItems}>{messagesItems}</div>
			<AddMessageFormeRedux  onSubmit = {sendMessage}/>
		</div>
	);
};

const maxLength = maxLengthCreator(50);
const AddMessageForm = (props) => {
	return (
	<form onSubmit = {props.handleSubmit}>
		<div>
			<Field 
			validate = {[RequiredField, maxLength]}
			 component = {Textarea}
			 name = {'newMessageBody'}
			 placeholder = {'Enter new message'} />
		</div>
		<div>
			<button >Send</button>
		</div>
	</form>)
	}
	
	const AddMessageFormeRedux = reduxForm({
		form: 'dialogAddMessageForm'
	  })(AddMessageForm)

export default Dialogs;
