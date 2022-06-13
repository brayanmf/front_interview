import React, { useState } from 'react';
import { Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const NavHeader = () => {
	const [styleAux, setStyleAux] = useState([true, false, false, false]);
	const handleClickStyle = (id) => {
		const updateStyle = styleAux.map((el, index) =>
			index !== id ? false : true
		);
		setStyleAux(updateStyle);
	};
	return (
		<Nav className='me-auto'>
			<Nav.Link
				as={NavLink}
				to='?filter=todos'
				onClick={() => handleClickStyle(0)}
				style={
					styleAux[0]
						? { color: 'rgb(28,28,28)' }
						: { color: 'rgb(138,138,138)' }
				}>
				Todos
			</Nav.Link>
			<Nav.Link
				as={NavLink}
				to='?filter=autos'
				onClick={() => handleClickStyle(1)}
				style={
					styleAux[1]
						? { color: 'rgb(28,28,28)' }
						: { color: 'rgb(138,138,138)' }
				}>
				Autos
			</Nav.Link>
			<Nav.Link
				as={NavLink}
				to='?filter=salud'
				onClick={() => handleClickStyle(2)}
				style={
					styleAux[2]
						? { color: 'rgb(28,28,28)' }
						: { color: 'rgb(138,138,138)' }
				}>
				Salud
			</Nav.Link>
			<Nav.Link
				as={NavLink}
				to='?filter=hogar'
				onClick={() => handleClickStyle(3)}
				style={
					styleAux[3]
						? { color: 'rgb(28,28,28)' }
						: { color: 'rgb(138,138,138)' }
				}>
				Hogar
			</Nav.Link>
		</Nav>
	);
};

export default NavHeader;
