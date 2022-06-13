import { Shake } from 'reshake';
import { Button } from 'react-bootstrap';
import { useStateParams } from '../../../../paramsContext';
import { LogoutAsync } from '../../../../api/auth';

const ShakeUser = ({ setShow }) => {
	const { effect, user, setUser } = useStateParams();
	const handleShow = () => setShow(true);
	const handleClick = async () => {
		await LogoutAsync();
		setUser({});
	};
	return (
		<Shake
			h={100}
			v={0}
			r={33}
			dur={1000}
			int={8.2}
			max={49}
			fixed={true}
			fixedStop={false}
			freez={false}
			active={effect}>
			{user.data?.success ? (
				<div>
					Brayanmf
					<button
						className='ms-2 btn btn-link '
						type='button'
						onClick={handleClick}>
						Salir
					</button>
				</div>
			) : (
				<Button variant='primary' onClick={handleShow}>
					iniciar sesion
				</Button>
			)}
		</Shake>
	);
};

export default ShakeUser;
