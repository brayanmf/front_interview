import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { useStateParams } from './paramsContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/header/Header';
import CardService from './components/cardService/CardService';
import CardForm from './components/cardForm/CardForm';

import './App.css';
import AlertMessage from './components/alertMessage/AlertMessage';

function App() {
	const { user, dataService } = useStateParams();
	const [searchParams] = useSearchParams();
	const filter = searchParams.get('filter');

	return (
		<>
			<Header />
			{user.aux && (
				<AlertMessage
					message={user.data.success ? 'Bienvenido' : user.data.error}
					type={user.data.success ? 'success' : 'danger'}
					success={user.data.success ? 'Success' : 'Error'}
				/>
			)}
			<div className='container'>
				<div className='row'>
					<div className='container col-md-8 col-'>
						<div className='row'>
							{dataService.length > 0 ? (
								dataService.map((service, index) => {
									if (service.category === filter)
										return (
											<div className='col-md-4' key={index}>
												<CardService service={service} />
											</div>
										);
									if (filter === 'todos' || filter === null)
										return (
											<div className='col-md-4' key={index}>
												<CardService service={service} />
											</div>
										);
									return null;
								})
							) : (
								<p className='mt-5 text-danger'>datos vacios </p>
							)}
						</div>
					</div>
					<div className='col-md-4 col-'>
						<CardForm />
					</div>
				</div>
			</div>
		</>
	);
}

export default App;
