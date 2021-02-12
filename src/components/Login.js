import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { useGoogleLogin } from 'react-google-login';
import { useDispatch } from 'react-redux';
import googleLogo from '../images/google-logo.png';
import { ALERT_STATES } from '../reducers/alertReducer';
import { showAlert } from '../actions/alertActions';
import { googleOAuthLogin } from '../actions/googleOauthActions';
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

function Login() {
	const classes = useStyles();
	const dispatch = useDispatch();
	/*Wrapper for our Oauth actions
  so we can call the alert at the appropriate time */
	const onSuccess = (res) => {
		dispatch(googleOAuthLogin(res));
		dispatch(
			showAlert({
				message: 'Successfully logged in',
				severity: ALERT_STATES.success
			})
		);
	};
	const onFailure = (res) => {
		dispatch(googleOAuthLogin(res));
		dispatch(
			showAlert({
				message: 'Login failed ',
				severity: ALERT_STATES.error
			})
		);
	};

	const { signIn } = useGoogleLogin({
		onSuccess,
		onFailure,
		clientId,
		isSignedIn: true
	});

	return (
		<Container component='section' className={classes.center}>
			<Button className={classes.button} onClick={signIn}>
				<Avatar src={googleLogo} className={classes.avatar} />
				<Typography component='p' variant='h6' className={classes.text}>
					Sign in with Google
				</Typography>
			</Button>
		</Container>
	);
}

export default Login;
