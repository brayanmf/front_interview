import React, { useState } from 'react';
import { Button, Modal, Form } from 'react-bootstrap';
import { LoginAsync } from '../../../../api/auth';
import { useStateParams } from '../../../../paramsContext';

const ModalLogin = ({ show, handleClose }) => {
	const { user, setUser } = useStateParams();
	const [data, setData] = useState({});

	const handleSubmit = async () => {
		const dataInfo = await LoginAsync(data);
		setUser({
			...user,
			aux: true,
			authenticated: dataInfo.success,
			data: dataInfo,
		});
		handleClose();
	};
	const handleChange = (e) => {
		setData({
			...data,
			[e.target.name]: e.target.value,
		});
	};

	return (
		<Modal show={show} onHide={handleClose}>
			<Modal.Header closeButton>
				<Modal.Title>Login</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<Form>
					<Form.Group className='mb-3'>
						<Form.Label>Usuario</Form.Label>
						<Form.Control
							type='email'
							name='userName'
							onChange={handleChange}
						/>
					</Form.Group>
					<Form.Group className='mb-3'>
						<Form.Label>Contraseña</Form.Label>
						<Form.Control
							type='password'
							name='password'
							onChange={handleChange}
						/>
					</Form.Group>
				</Form>
			</Modal.Body>
			<Modal.Footer>
				<Button variant='secondary' onClick={handleClose}>
					Cancelar
				</Button>
				<Button variant='primary' onClick={handleSubmit} type='submit'>
					Iniciar
				</Button>
			</Modal.Footer>
		</Modal>
	);
};

export default ModalLogin;
