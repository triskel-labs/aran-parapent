<script>
	import ServiceCard from '../ServiceCard.svelte';
	import { services } from '$lib/services';
</script>

<section
	id="services-section"
	class="flex h-full w-full flex-col items-center justify-center gap-10 px-4 py-16 lg:px-18 lg:py-28"
>
	<div class="flex w-full flex-col gap-2">
		<h1 class="sifon text-center text-3xl text-neutral-900 lg:text-4xl">
			DESCUBRE NUESTROS VUELOS <br />
			<span class="text-[2rem] lg:text-[2.5rem]">MÁS ESPECIALES</span>
		</h1>
		<p class="text-md pt-4 text-center font-sans text-neutral-900 lg:text-xl">
			Vuelos tranquilos de tarde, vuelos térmicos de adrenalina o actividad combinada de trekking y
			vuelo desde puntos escondidos.
		</p>
	</div>
	<div class="grid w-full max-w-7xl grid-cols-1 items-stretch gap-6 md:grid-cols-2 xl:grid-cols-4">
		{#each services as service}
			<div class="flex justify-center">
				<ServiceCard {service} />
			</div>
		{/each}
	</div>
</section>

<style>
	section {
		background: var(--primaryGradientVertical);
	}
</style>
