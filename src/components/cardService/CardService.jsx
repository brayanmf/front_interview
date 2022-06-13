import { Card } from 'react-bootstrap';
import { useStateParams } from '../../paramsContext';

const CardService = ({ service }) => {
	const { user, setEffect, dataService, setDataService, setDataToEdit } =
		useStateParams();
	const handleDelete = (id) => {
		if (!user.authenticated) {
			setEffect(true);
			setTimeout(() => setEffect(false), 1000);
			return;
		}
		const isDeleted = window.confirm(`¿Está seguro de eliminar? ${id} `);
		if (isDeleted) {
			const updateData = dataService.filter((el) => el.id !== id);
			setDataService(updateData);
		}
	};
	const handleEdit = (data) => {
		if (!user.authenticated) {
			setEffect(true);
			setTimeout(() => setEffect(false), 1000);
			return;
		}

		setDataToEdit(data);
	};

	return (
		<Card className='m-2'>
			<Card.Body>
				<Card.Title>{service.name}</Card.Title>

				<Card.Text>{service.description}</Card.Text>
				<button
					onClick={() => handleEdit(service)}
					className='btn btn-link text-decoration-none'>
					Editar
				</button>
				<button
					onClick={() => handleDelete(service.id)}
					className='btn btn-link text-decoration-none'>
					Eliminar
				</button>
			</Card.Body>
		</Card>
	);
};

export default CardService;
