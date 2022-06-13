import React from 'react';
import { useStateParams } from '../../paramsContext';
import { Alert } from 'react-bootstrap';

const AlertMessage = ({ success, message, type }) => {
	const { user, setUser } = useStateParams();

	return (
		<Alert
			show={user.aux}
			variant={type}
			onClose={() => setUser({ ...user, aux: false })}
			dismissible
			className='position-absolute'
			style={{ zIndex: 2 }}>
			<Alert.Heading>{success}</Alert.Heading>
			<p>{message}</p>
		</Alert>
	);
};

export default AlertMessage;
