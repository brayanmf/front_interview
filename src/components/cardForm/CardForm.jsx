import React, { useState, useEffect } from 'react';
import { Card, Form, Button } from 'react-bootstrap';
import { useStateParams } from '../../paramsContext';
const initailForm = {
	id: null,
	name: '',
	category: 'default',
	description: '',
};
const CardForm = () => {
	const {
		user,
		setEffect,
		setDataService,
		dataService,
		dataToEdit,
		setDataToEdit,
	} = useStateParams();
	const [form, setForm] = useState(initailForm);

	const handleReset = () => {
		setForm(initailForm);
		setDataToEdit(null);
	};
	const handleSubmit = () => {
		if (!user.authenticated) {
			setEffect(true);
			setTimeout(() => setEffect(false), 1000);
			return;
		}
		if (!form.name || !form.category || !form.description) {
			alert('Faltan datos');
			return;
		}

		if (form.id === null) {
			setForm((form.id = Date.now()));
			setDataService([...dataService, form]);
		} else {
			const updateDate = dataService.map((el) =>
				el.id === form.id ? form : el
			);

			setDataService(updateDate);
		}
		handleReset();
	};
	const handleCancel = () => {
		if (!user.authenticated) {
			setEffect(true);
			setTimeout(() => setEffect(false), 900);
			return;
		}
		handleReset();
	};
	const handleChange = (e) => {
		setForm({ ...form, [e.target.name]: e.target.value });
	};

	useEffect(() => {
		if (dataToEdit) {
			setForm(dataToEdit);
		} else {
			setForm(initailForm);
		}
	}, [dataToEdit]);

	return (
		<Card className='m-4 p-3'>
			<h3>Servicio</h3>
			<Form>
				<Form.Group className='mb-3'>
					<Form.Label>Nombre</Form.Label>
					<Form.Control
						type='text'
						disabled={!user?.authenticated}
						name='name'
						onChange={handleChange}
						value={form.name}
					/>
				</Form.Group>
				<Form.Group className='mb-3'>
					<Form.Label>Seleccione</Form.Label>
					<Form.Select
						disabled={!user?.authenticated}
						name='category'
						onChange={handleChange}
						value={form.category}
						defaultValue='default'>
						<option value='default' disabled>
							Categorías
						</option>
						<option value='autos'>Autos</option>
						<option value='salud'>Salud</option>
						<option value='hogar'>Hogar</option>
					</Form.Select>
				</Form.Group>
				<Form.Group className='mb-3'>
					<Form.Label>Descripción</Form.Label>
					<Form.Control
						as='textarea'
						disabled={!user?.authenticated}
						style={{ resize: 'none' }}
						name='description'
						onChange={handleChange}
						value={form.description}
					/>
				</Form.Group>
			</Form>

			<Card.Footer>
				<Button variant='outline-success' onClick={handleSubmit}>
					{dataToEdit ? 'Editar' : 'Guardar'}
				</Button>
				<Button variant='outline-danger' onClick={handleCancel}>
					Cancelar
				</Button>
			</Card.Footer>
		</Card>
	);
};

export default CardForm;
