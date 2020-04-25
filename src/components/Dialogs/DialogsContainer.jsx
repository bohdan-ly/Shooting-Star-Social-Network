import React from 'react';
import { sendMessageCreator } from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';
import { connect } from 'react-redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';

let mapStateToProps = (state) => {
	return {
		dialogs: state.dialogsServerData.dialogFieldData,
		messages: state.dialogsServerData.messageData,
		newMessageBody: state.dialogsServerData.newMessageText,
		isAuth: state.auth.isAuth
	};
};

let mapDispatchToProps = (dispatch) => {
	return {
		sendMessageCreator: (newMessageBody) => {
			dispatch(sendMessageCreator(newMessageBody));
		},
	};
};




export default compose(
	connect(mapStateToProps, mapDispatchToProps),
	withAuthRedirect
)(Dialogs)
;
