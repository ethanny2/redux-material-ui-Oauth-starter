import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import { clearAlert, showAlert } from '../actions/alertActions';
import { connect } from 'react-redux';
import { ALERT_STATES } from '../reducers/alertReducer';
import {
	googleOAuthLogin,
	googleOAuthLogout
} from '../actions/googleOauthActions';
import { bindActionCreators } from 'redux';

const useStyles = makeStyles((theme) => ({
	paper: {
		marginTop: theme.spacing(8),
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center'
	},
	avatar: {
		margin: theme.spacing(1),
		backgroundColor: theme.palette.secondary.main
	},
	form: {
		width: '100%', // Fix IE 11 issue.
		marginTop: theme.spacing(1)
	},
	submit: {
		margin: theme.spacing(3, 0, 2)
	}
}));

const Login = ({ googleOAuthLogin, auth, googleOAuthLogout, showAlert }) => {
	const classes = useStyles();
	console.log(auth);
	const renderUI = () => {
		console.log(auth.loggedIn);
		if (auth.loggedIn === false) {
			return (
				<>
					<h1>Login</h1>
					<GoogleLogin
						clientId='143814432776-d52d5uapdbufmmt0epop4upk71g4fghi.apps.googleusercontent.com'
						buttonText='Login'
						prompt="consent"
						onSuccess={(res) => {
							showAlert({
								message: 'Successfully logged in',
								severity: ALERT_STATES.success
							});
							googleOAuthLogin(res);
						}}
						onFailure={(res) => {
							googleOAuthLogin(res);
							showAlert({
								message: 'Login failed ',
								severity: ALERT_STATES.error
							});
						}}
						cookiePolicy={'single_host_origin'}
						isSignedIn={true}
					/>
				</>
			);
		} else {
			return (
				<>
					<h1>Logout</h1>
					<GoogleLogout
						clientId='143814432776-d52d5uapdbufmmt0epop4upk71g4fghi.apps.googleusercontent.com'
						buttonText='Logout'
						onLogoutSuccess={(res) => {
							googleOAuthLogout(res);
							showAlert({
								message: 'Successfully logged out ',
								severity: ALERT_STATES.success
							});
						}}
						onFailure={(res) => {
							googleOAuthLogout(res);
							showAlert({
								message: 'Logout failed ',
								severity: ALERT_STATES.error
							});
						}}
					></GoogleLogout>
				</>
			);
		}
	};

	return <section className={classes.paper}>{renderUI()}</section>;
};

function mapStateToProps(state, ownProps) {
	//Here you can get whatever the component needs from redux store...
	console.log({ state });
	return { auth: state.auth };
}

/*Can define this with or without bindActionCreators;
	or just do the shorthand method to include this action
	creators.
	
export default connect(mapStateToProps, {
	googleOAuthLogin,
	googleOAuthLogout,
	clearAlert,
	showAlert	
})(Login);

*/

function mapDispatchToProps(dispatch) {
	return bindActionCreators(
		{ clearAlert, showAlert, googleOAuthLogin, googleOAuthLogout },
		dispatch
	);
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
