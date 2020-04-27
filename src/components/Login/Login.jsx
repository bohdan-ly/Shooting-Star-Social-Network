import React from 'react';
import s from './Login.module.css';
import { reduxForm } from 'redux-form';
import { Input, createField } from '../common/FormsControls/FormsControls';
import { RequiredField } from './../../utils/validators';
import { login } from './../../redux/auth-reducer';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import style from '../common/FormsControls/FormsControls.module.css';

const LoginForm = ({ handleSubmit, error, captchaUrl }) => {
	return (
		<form onSubmit={handleSubmit}>
			{createField('Email', 'email', [ RequiredField ], Input)}
			{createField('Password', 'password', [ RequiredField ], Input, { type: 'password' })}
			{createField(null, 'rememberMe', [], Input, { type: 'checkbox' }, 'Remember Me')}
			{captchaUrl && <img src={captchaUrl} />}
			{captchaUrl && createField('Symbols from image', 'captcha', [ RequiredField ], Input)}
			{error && <div className={style.formSummaryError}>{error}</div>}
			<div>
				<button>Login</button>
			</div>
		</form>
	);
};

const LoginReduxForm = reduxForm({
	// a unique name for the form
	form: 'login'
})(LoginForm);

const Login = (props) => {
	const onSubmit = (formData) => {
		props.login(formData.email, formData.password, formData.rememberMe, formData.captcha);
	};
	if (props.isAuth) {
		return <Redirect to={'/profile'} />;
	}

	return (
		<div className={s.content}>
			<div>
				<h1>Login</h1>
				<LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl} />
			</div>
		</div>
	);
};

const mapStateToProps = (state) => ({
	captchaUrl: state.auth.captchaUrl,
	isAuth: state.auth.isAuth
});

export default connect(mapStateToProps, { login })(Login);
