<script>
	import ServiceCard from '../ServiceCard.svelte';

	const services = [
		{
			title: 'Vuelo Valle',
			description:
				"El vuelo perfecto para conocer la Val d'Aran. Combina 40 minutos de trekking con el parapente a la espalda y 15 minutos de vuelo. Despegando de un sitio poco accesible y privilegiado de vuelo. Con vistas al Parc Nacional d'Aigüestortes y al glaciar del Aneto.",
			imageUrl: 'vuelo-valle.webp',
			imagePosition: 'center 46%',
			price: '200'
		},
		{
			title: 'Vuelo térmico',
			description:
				"Disfruta de un vuelo más largo donde ganamos altura gracias a las corrientes térmicas. Vuelo de al menos 30 minutos, con posibilidad de alargar siempre que la meteorología lo permita. Este vuelo también se puede combinar con un trekking de 40'.",
			imageUrl: 'vuelo-termico.webp',
			imagePosition: 'center 34%',
			price: '250'
		},
		{
			title: 'Vuelo Luchon',
			description:
				'Si eres alguien que únicamente quiere volar y no quieres andar más de 5 minutos, este vuelo es para ti. Un despegue impresionante en la estación de Superbagnères de Luchon. Vuelo de 15 minutos de duración.',
			imageUrl: 'hike-fly.webp',
			imagePosition: 'center center',
			price: '160'
		},
		{
			title: 'Vuelo con Buggie',
			description:
				'En este vuelo empezamos a tope de principio a fin. Sube en Buggie hasta la antigua estación de la Tuca. Haz una pequeña excursión de 20 minutos y disfruta del único vuelo donde sobrevolamos Vielha, unas vistas únicas e irrepetibles.',
			imageUrl: 'vuelo-buggie.webp',
			imagePosition: 'center 48%',
			price: '230'
		}
	];
</script>

<section
	id="services-section"
	class="flex h-full w-full flex-col items-center justify-center gap-10 px-4 py-16 lg:px-18 lg:py-28"
>
	<div class="flex w-full flex-col gap-2">
		<h1 class="sifon text-center text-3xl text-neutral-900 lg:text-4xl">
			DESCUBRE NUESTROS VUELOS <br />
			<span class="text-[2rem] lg:text-[2.5rem]">MAS ESPECIALES</span>
		</h1>
		<p class="text-md pt-4 text-center font-sans text-neutral-900 lg:text-xl">
			Vuelos tranquilos de tarde, vuelos térmicos de adrenalina o actividad combinada de Trekking y
			Vuelo desde puntos escondidos.
		</p>
	</div>
	<div
		class="services grid w-full max-w-7xl grid-cols-1 place-items-center gap-6 md:grid-cols-2 xl:grid-cols-4"
	>
		{#each services as service}
			<ServiceCard {service} />
		{/each}
	</div>
</section>

<style>
	section {
		background: var(--primaryGradientVertical);
	}
</style>
