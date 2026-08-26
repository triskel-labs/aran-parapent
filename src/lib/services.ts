export interface Service {
	title: string;
	description: string;
	imageUrl: string;
	imagePosition?: string;
	price: string;
	slug: string;
	duration: string;
	area: string;
}

export const services: Service[] = [
	{
		title: 'Vuelo Valle',
		description:
			"El vuelo perfecto para conocer la Val d'Aran. Combina 40 minutos de trekking con el parapente a la espalda y 15 minutos de vuelo. Despegando de un sitio poco accesible y privilegiado, con vistas al Parc Nacional d'Aigüestortes y al glaciar del Aneto.",
		imageUrl: 'vuelo-valle.webp',
		imagePosition: 'center 46%',
		price: '200',
		slug: 'vuelo-valle',
		duration: '15 minutos de vuelo + 40 minutos de trekking',
		area: "Val d'Aran"
	},
	{
		title: 'Vuelo térmico',
		description:
			"Disfruta de un vuelo más largo donde ganamos altura gracias a las corrientes térmicas. Vuelo de al menos 30 minutos, con posibilidad de alargar siempre que la meteorología lo permita. También se puede combinar con un trekking de 40'.",
		imageUrl: 'vuelo-termico.webp',
		imagePosition: 'center 34%',
		price: '250',
		slug: 'vuelo-termico',
		duration: 'Al menos 30 minutos de vuelo',
		area: "Val d'Aran y Pirineos"
	},
	{
		title: 'Vuelo Luchon',
		description:
			'Si solo quieres volar y no quieres andar más de 5 minutos, este vuelo es para ti. Un despegue impresionante en la estación de Superbagnères de Luchon y 15 minutos de vuelo para disfrutar los Pirineos desde arriba.',
		imageUrl: 'hike-fly.webp',
		imagePosition: 'center center',
		price: '160',
		slug: 'vuelo-luchon',
		duration: '15 minutos de vuelo',
		area: 'Luchon, Pirineos'
	},
	{
		title: 'Vuelo con Buggie',
		description:
			'En este vuelo empezamos a tope de principio a fin. Sube en buggie hasta la antigua estación de La Tuca, haz una pequeña excursión de 20 minutos y sobrevuela Vielha con unas vistas únicas.',
		imageUrl: 'vuelo-buggie.webp',
		imagePosition: 'center 48%',
		price: '230',
		slug: 'vuelo-buggie',
		duration: '20 minutos de excursión + vuelo biplaza',
		area: 'Vielha, La Tuca'
	}
];
