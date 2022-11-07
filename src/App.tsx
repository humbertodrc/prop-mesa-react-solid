import { useState } from 'react';
import './App.css';
import { Card } from './components/Card';
import {
	personajesPorDefecto,
	elementos as elementosData,
	Personaje,
} from './data';

function App() {
	const [personajesInicial, setPersonajesInicial] = useState<Personaje[]>(
		personajesPorDefecto || []
	);
	const [elementos, setElementos] = useState(elementosData || {});
	const [personaje, setPersonaje] = useState({
		nombre: '',
		avatar: '',
		elemento: '',
	});

	const { nombre, avatar, elemento } = personaje;

	const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
		setPersonaje({
			...personaje,
			[e.target.name]: e.target.value,
		});
	};

	const handleChangeSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
		setPersonaje({
			...personaje,
			[e.target.name]: e.target.value,
		});
	};

	const addPersonaje = () => {
		setPersonajesInicial([...personajesInicial, personaje]);
		setPersonaje({
			nombre: '',
			avatar: '',
			elemento: '',
		});
	};

	const handleImage = (e: React.ChangeEvent<HTMLInputElement>) => {
		const file = e.target.files?.[0];
		const reader = new FileReader();
		reader.readAsDataURL(file as Blob);

		reader.onloadend = () => {
			setPersonaje({
				...personaje,
				avatar: reader.result as string,
			});
		};
	};

	return (
		<div className='App'>
			{/* Crear superHero */}
			<header className='py-5 text-center container'>
				<div className='row py-lg-5'>
					<div className='col-lg-6 col-md-8 mx-auto'>
						<h1 className='fw-light'>Álbum de superhéroes</h1>
						<p className='lead fw-bold'>
							¡Creá y coleccioná tus superhéroes favoritos!
						</p>
						<button
							type='button'
							className='btn btn-primary'
							data-bs-toggle='modal'
							data-bs-target='#inputModal'
						>
							Crear Superhéroe
						</button>
					</div>
				</div>
			</header>
			{/* Lista Personajes */}
			<main>
				<div className='album py-5'>
					<div className='container'>
						<div
							className='row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3'
							id='card-container'
						>
							{/* <Card /> */}
							{personajesInicial.map(personaje =>
								personaje.elemento === elementos.agua.nombre ? (
									<Card
										key={personaje.nombre}
										personaje={personaje}
										elemento={elementos.agua}
									/>
								) : personaje.elemento === elementos.fuego.nombre ? (
									<Card
										key={personaje.nombre}
										personaje={personaje}
										elemento={elementos.fuego}
									/>
								) : personaje.elemento === elementos.tierra.nombre ? (
									<Card
										key={personaje.nombre}
										personaje={personaje}
										elemento={elementos.tierra}
									/>
								) : (
									personaje.elemento === elementos.aire.nombre && (
										<Card
											key={personaje.nombre}
											personaje={personaje}
											elemento={elementos.aire}
										/>
									)
								)
							)}
						</div>
					</div>
				</div>
			</main>
			{/* Modal */}
			<div
				className='modal fade'
				id='inputModal'
				aria-labelledby='inputModalLabel'
				aria-hidden='true'
			>
				<div className='modal-dialog'>
					<div className='modal-content'>
						<div className='modal-header'>
							<h5 className='modal-title' id='inputModalLabel'>
								Nuevo Superhéroe
							</h5>
							<button
								type='button'
								className='btn-close'
								data-bs-dismiss='modal'
								aria-label='Close'
							></button>
						</div>
						<div className='modal-body'>
							<div className='input-group mb-3'>
								<span className='input-group-text' id='basic-nombre'>
									Nombre
								</span>
								<input
									type='text'
									className='form-control'
									aria-label='nombreSuperheroe'
									aria-describedby='basic-nombre'
									id='nombre-personaje'
									value={nombre}
									name='nombre'
									onChange={handleChangeInput}
								/>
							</div>
							<div className='input-group mb-3'>
								<span className='input-group-text'>Elemnto</span>
								<select
									className='form-select'
									aria-label='select-elemento'
									id='elemento-personaje'
									value={elemento}
									name='elemento'
									onChange={handleChangeSelect}
								>
									<option value={''}>Seleccionar...</option>
									<option value='Agua'>Agua</option>
									<option value='Aire'>Aire</option>
									<option value='Fuego'>Fuego</option>
									<option value='Tierra'>Tierra</option>
								</select>
							</div>
							<div className='input-group mb-3'>
								<input
									// type='text'
									type='file'
									className='form-control'
									aria-label='avatar'
									aria-describedby='basic-avatar'
									id='avatar-personaje'
									// value={avatar}
									name='avatar'
									onChange={handleImage}
								/>
							</div>
						</div>
						<div className='modal-footer'>
							<button
								type='button'
								className='btn btn-secondary'
								data-bs-dismiss='modal'
							>
								Cancelar
							</button>
							<button
								type='button'
								className='btn btn-primary'
								data-bs-toggle='modal'
								id='crear-personaje'
								onClick={addPersonaje}
							>
								Crear Superhéroe
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
