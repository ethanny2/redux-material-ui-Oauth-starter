import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { useGoogleLogin, useGoogleLogout } from 'react-google-login';
import googleLogo from '../images/google-logo.png';

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
		margin: 0
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
		<Container component='section' className={classes.center}>
			<Button className={classes.button}>
				<Avatar src={googleLogo} className={classes.avatar} />
				<Typography component='p' variant='h6' className={classes.text}>
					Sign in with Google
				</Typography>
			</Button>
		</Container>
	);
}
