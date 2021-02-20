import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { useGoogleLogout } from 'react-google-login';
import { useDispatch } from 'react-redux';
import googleLogo from '../images/google-logo.png';
import { showAlert } from '../actions/alertActions';
import { googleOAuthLogout } from '../actions/googleOauthActions';
const clientId =
	'775972216962-1jeavqdd1brclco54nal4dmc753semvo.apps.googleusercontent.com';

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

function Logout() {
	const classes = useStyles();
	const dispatch = useDispatch();

	const onSuccess = (res) => {
		dispatch(googleOAuthLogout(res));
		dispatch(
			showAlert({
				message: 'Successfully logged out in'
			})
		);
	};
	const onFailure = (res) => {
		dispatch(googleOAuthLogout(res));
		dispatch(
			showAlert({
				message: 'Logout failed '
			})
		);
	};

	const { signOut } = useGoogleLogout({
		onFailure,
		onLogoutSuccess: onSuccess,
		clientId,
		isSignedIn: true
	});

	return (
		<Container component='section' className={classes.center}>
			<Button className={classes.button} onClick={signOut}>
				<Avatar src={googleLogo} className={classes.avatar} />
				<Typography component='p' variant='h6' className={classes.text}>
					Sign out of Google
				</Typography>
			</Button>
		</Container>
	);
}

export default Logout;
