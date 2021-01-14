import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import {
	Snackbar,
	Typography,
	Container,
	Button,
	IconButton
} from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';

import { bindActionCreators } from 'redux';
import { clearAlert } from '../actions/alertActions';

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

const Alert = ({ clearAlert, alert }) => {
	const handleClose = () => {
		clearAlert();
	};
	const classes = useStyles();
	console.log(alert);
	return (
		<Snackbar
			{...alert}
			onClose={handleClose}
			action={
				<React.Fragment>
					<IconButton
						size='small'
						aria-label='close'
						color='inherit'
						onClick={handleClose}
					>
						<CloseIcon fontSize='small' />
					</IconButton>
				</React.Fragment>
			}
		/>
	);
};

function mapStateToProps(state) {
	//Here you can get whatever the component needs from redux store...
	console.log({ state });
	return { alert: state.alert };
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ clearAlert }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Alert);
