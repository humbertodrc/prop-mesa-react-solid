import React from 'react';
import { Personaje, ElementoDetail } from '../../data/personajes';
export interface Card {
	personaje: Personaje;
	elemento: ElementoDetail;
}

const Card: React.FC<Card> = ({ personaje, elemento }) => {
	return (
		<div className='col'>
			<div className='card shadow-sm'>
				<div className='card-header'>
					<img
						src={personaje.avatar}
						alt={personaje.nombre}
						className='bd-placeholder-img card-img-top'
					/>
					<img src={elemento.logo} alt={elemento.nombre} className='logo-elemento' />
				</div>
				<div className='card-body'>
					<h5 className='card-title'>{personaje.nombre}</h5>
					<small className='text-muted'>{elemento.nombre}</small>
					<ul>
						<li>
							<i>Fuerza:</i> <span>{elemento.fuerza}</span>
						</li>
						<li>
							<i>Vida:</i> <span>{elemento.vida}</span>
						</li>
						<li>
							<i>Defensa:</i> <span>{elemento.defensa}</span>
						</li>
						<li>
							<i>Velocidad:</i> <span>{elemento.velocidad}</span>
						</li>
					</ul>
					<div className='d-flex justify-content-between align-items-center'></div>
				</div>
			</div>
		</div>
	);
};

export default Card;
