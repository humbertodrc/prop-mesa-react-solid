export interface Personaje {
	nombre: string,
	elemento: string,
	avatar: string,
}

export interface Elementos {
	agua: ElementoDetail;
	fuego: ElementoDetail;
	tierra: ElementoDetail;
	aire: ElementoDetail;
}

export interface ElementoDetail {
	nombre: string;
	logo: string;
	debilidad: string;
	fuerza: number;
	vida: number;
	defensa: number;
	velocidad: number;
}

export const elementos: Elementos = {
	agua: {
		nombre: 'Agua',
		logo: '/src/assets/images/agua.png',
		debilidad: 'Tierra',
		fuerza: 30,
		vida: 100,
		defensa: 40,
		velocidad: 70,
	},
	fuego: {
		nombre: 'Fuego',
		logo: '/src/assets/images/fuego.png',
		debilidad: 'Agua',
		fuerza: 50,
		vida: 90,
		defensa: 50,
		velocidad: 60,
	},
	tierra: {
		nombre: 'Tierra',
		logo: '/src/assets/images/tierra.png',
		debilidad: 'Aire',
		fuerza: 40,
		vida: 80,
		defensa: 60,
		velocidad: 50,
	},
	aire: {
		nombre: 'Aire',
		logo: '/src/assets/images/aire.png',
		debilidad: 'Fuego',
		fuerza: 30,
		vida: 80,
		defensa: 40,
		velocidad: 80,
	},
};

export const personajesPorDefecto: Personaje[]  = [
	{
		nombre: 'Aquagirl',
		elemento: 'Agua',
		avatar:
			'https://i.pinimg.com/564x/e8/a6/7b/e8a67b8241f508dcfd67623ed400f6fb.jpg',
	},
	{
		nombre: 'Windstorm',
		elemento: 'Aire',
		avatar:
			'https://i.pinimg.com/564x/9b/2f/b1/9b2fb11fb0e56b914edf1ae2c15d55fa.jpg',
	},
	{
		nombre: 'Firegirl',
		elemento: 'Fuego',
		avatar:
			'https://i.pinimg.com/564x/84/09/58/84095862a57e6bd18f2b392f52bbd0d6.jpg',
	},
	{
		nombre: 'Earthquake',
		elemento: 'Tierra',
		avatar:
			'https://i.pinimg.com/564x/2b/ac/3a/2bac3a5eb353e08e25a609993798a774.jpg',
	},
];
