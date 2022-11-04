import React from 'react';
export interface Card {}

const Card: React.FC<Card> = () => {
	return (
		<div>
			<div className='card shadow-sm'>
				<div className='card-header'>
					<img src='' alt='' className='bd-placeholder-img card-img-top' />
					<img src='' alt='' className='logo-elemento' />
				</div>
				<div className='card-body'>
					<h5 className='card-title'></h5>
					<small className='text-muted'></small>
					<ul>
						<li>
							<i>Fuerza:</i> <span></span>
						</li>
						<li>
							<i>Vida:</i> <span></span>
						</li>
						<li>
							<i>Defensa:</i> <span></span>
						</li>
						<li>
							<i>Velocidad:</i> <span></span>
						</li>
					</ul>
					<div className='d-flex justify-content-between align-items-center'></div>
				</div>
			</div>
		</div>
	);
};

export default Card;
