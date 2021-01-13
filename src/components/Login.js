import React, { useState } from 'react';
import { Avatar } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import { connect } from 'react-redux';
import { googleOAuthLogin, googleOAuthLogout } from '../actions/googleOauthActions';
import Collapse from '@material-ui/core/Collapse';

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

const Login = ({ googleOAuthLogin, auth, googleOAuthLogout }) => {
	const classes = useStyles();

	const renderUI = () => {
		console.log(auth.loggedIn);
		if (auth.loggedIn === false) {
			return (
				<>
					<h1>Login</h1>
					<GoogleLogin
						clientId='143814432776-d52d5uapdbufmmt0epop4upk71g4fghi.apps.googleusercontent.com'
						buttonText='Login'
						onSuccess={googleOAuthLogin}
						onFailure={googleOAuthLogin}
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
						onLogoutSuccess={googleOAuthLogout}
						onFailure={googleOAuthLogout}
					></GoogleLogout>
				</>
			);
		}
	};

	return <section className={classes.paper}>{renderUI()}</section>;
};

function mapStateToProps(state) {
	//Here you can get whatever the component needs from redux store...
	console.log({ state });
	return { auth: state.auth };
}

export default connect(mapStateToProps, {
	googleOAuthLogin,
	googleOAuthLogout
})(Login);
