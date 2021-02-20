import React from 'react';
import { Snackbar, IconButton } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import { useDispatch, useSelector } from 'react-redux';
import { clearAlert } from '../actions/alertActions';

const Alert = () => {
	/* Replaces mapStateToProps */
	const alert = useSelector((state) => state.alert);
	/*Replaces mapDispatchToProps */
	const dispatch = useDispatch();
	const handleClose = () => dispatch(clearAlert());
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

export default Alert;