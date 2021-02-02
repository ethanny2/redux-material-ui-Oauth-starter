import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { useGoogleLogin, useGoogleLogout } from 'react-google-login';
import googleLogo from '../images/google-logo.png';
import { darken } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	paper: {
		marginTop: theme.spacing(8),
		display: 'flex',
		alignItems: 'center',
		// border: '1px solid red',
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
		margin: theme.spacing(1)
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

export default function SignIn() {
	const classes = useStyles();

	return (
		<Container component='section' maxWidth='xs'>
			<Button className={classes.paper}>
				<Avatar src={googleLogo} className={classes.avatar} />

				<Typography component='h1' variant='h6' className={classes.text}>
					Sign in with Google
				</Typography>
			</Button>
			{/* <div className={classes.paper}>
				<Avatar src={googleLogo} className={classes.avatar}></Avatar>
				<Typography component='h1' variant='h6' className={classes.text}>
					Sign in with Google
				</Typography>
			</div> */}
		</Container>
	);
}
