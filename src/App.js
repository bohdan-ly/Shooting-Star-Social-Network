import React, { Suspense } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import News from './components/News/News';
import { Route, withRouter } from 'react-router-dom';
import UsersContainer from './components/Users/UsersContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import LoginPage from './components/Login/Login';
import { compose } from 'redux';
import { connect } from 'react-redux';
import Preloader from './components/common/preloader/Preloader';
import { initializeApp } from './redux/app-reducer';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/redux-store';
import Music from './components/Music/Music'

const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));
const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const Settings = React.lazy(() => import('./components/Settings/Settings'));

class App extends React.Component {
	componentDidMount() {
		this.props.initializeApp();
	}
	render() {
		if (!this.props.initialized) {
			return <Preloader />;
		}
		return (
			<div className="app-wrapper">
				<HeaderContainer />
				<Navbar />
				<div className="app-wrapper-content">
					<Route
						path="/dialogs"
						render={() => {
							return <Suspense fallback={<Preloader />}>
								<DialogsContainer />
							</Suspense>;
						}}
					/>
					<Route
						path="/profile/:userId?"
						render={() => {
							return <Suspense fallback={<Preloader />}>
								<ProfileContainer />
							</Suspense>;
						}}
					/>
					<Route path="/users" render={() => <UsersContainer />} />
					<Route path="/news" render={() => <News />} />
					<Route path="/music" render={() => <Music />} />
					<Route
						path="/settings"
						render={() => {
							return <Suspense fallback={<Preloader />}>
								<Settings />
							</Suspense>;
						}}
					/>
					<Route path="/login" render={() => <LoginPage />} />
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	initialized: state.app.initialized
});

let AppContainer = compose(withRouter, connect(mapStateToProps, { initializeApp }))(App);

const ShootingStarApp = () => {
	return (
		<BrowserRouter>
			<Provider store={store}>
				<AppContainer />
			</Provider>
		</BrowserRouter>
	);
};

export default ShootingStarApp;
