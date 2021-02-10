import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { useGoogleLogout } from 'react-google-login';
import googleLogo from '../images/google-logo.png';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { ALERT_STATES } from '../reducers/alertReducer';
import { clearAlert, showAlert } from '../actions/alertActions';
import { googleOAuthLogout } from '../actions/googleOauthActions';
import Switch from '@material-ui/core/Switch';
const clientId =
	'143814432776-d52d5uapdbufmmt0epop4upk71g4fghi.apps.googleusercontent.com';

const useStyles = makeStyles((theme) => ({
	center: {
		display: 'flex',
		justifyContent: 'center'
	},
	button: {
		textTransform: 'none',
		marginTop: theme.spacing(10),
		display: 'flex',
		alignItems: 'center',
		boxShadow: theme.shadows[3],
		backgroundColor: theme.palette.primary.main,
		color: theme.palette.primary.contrastText,
		transition: 'background-color 0.5s',
		'&:hover': {
			backgroundColor: theme.palette.primary.dark,
			transition: 'background-color 0.5s',
			cursor: 'pointer'
		}
	},
	avatar: {
		margin: `0 ${theme.spacing(0.5)}px`
	},
	text: {
		flexGrow: 1,
		textAlign: 'center'
	},
	form: {
		width: '100%', // Fix IE 11 issue.
		marginTop: theme.spacing(1)
	},
	submit: {
		margin: theme.spacing(3, 0, 2)
	}
}));

function Logout({ googleOAuthLogout, showAlert }) {
	const classes = useStyles();
	/*Wrapper for our Oauth actions
  so we can call the alert at the appropriate time */
	const onSuccess = (res) => {
		googleOAuthLogout(res);
		showAlert({
			message: 'Successfully logged out in',
			severity: ALERT_STATES.success
		});
	};
	const onFailure = (res) => {
		googleOAuthLogout(res);
		showAlert({
			message: 'Logout failed ',
			severity: ALERT_STATES.error
		});
	};

	const { signOut } = useGoogleLogout({
		onFailure,
		onLogoutSuccess: onSuccess,
		clientId,
		isSignedIn: true
	});

	return (
		<Container component='section' className={classes.center}>
		
			{/* <Switch
				color='primary'
				checked={false}
				onChange={() => {
					console.log('Please work');
				}}
				inputProps={{ 'aria-label': 'primary checkbox' }}

				name='themeToggle'
			/> */}
			<Button className={classes.button} onClick={signOut}>
				<Avatar src={googleLogo} className={classes.avatar} />
				<Typography component='p' variant='h6' className={classes.text}>
					Sign out of Google
				</Typography>
			</Button>
		</Container>
	);
}

function mapStateToProps(state, ownProps) {
	//Here you can get whatever the component needs from redux store...
	console.log({ state });
	return { auth: state.auth };
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators(
		{ clearAlert, showAlert, googleOAuthLogout },
		dispatch
	);
}

export default connect(mapStateToProps, mapDispatchToProps)(Logout);
