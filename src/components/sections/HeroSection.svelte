<script lang="ts">
	import ContactModal from '../ContactModal.svelte';

	let showModal = $state(false);
</script>

<section id="hero-section" class="@container/wrapper overlay relative h-dvh w-full overflow-hidden bg-neutral-950">
	<picture class="absolute inset-0 z-0 h-full w-full" aria-hidden="true">
		<source media="(min-width: 1280px)" srcset="/landscape-paraglide.webp" />
		<img
			src="/portrait-paraglide-cloud.webp"
			alt=""
			width="1000"
			height="1333"
			class="hero-image h-full w-full object-cover object-center"
			fetchpriority="high"
			loading="eager"
			decoding="async"
		/>
	</picture>

	<div class="relative z-10 flex h-full flex-col items-center justify-end gap-6 @5xl:flex-row">
		<div class="h-2/5 @5xl:h-full @5xl:w-2/5"></div>
		<div
			class="content flex h-4/6 w-full flex-col items-center justify-center gap-4 @5xl:h-full @5xl:w-3/5"
		>
			<div class="headings flex w-full flex-col items-center justify-center gap-4 px-4">
				<h1 class="sifon text-center text-4xl font-bold text-white @5xl:text-5xl">
					VUELA ENTRE <br /><span
						class="text-gradient text-outline text-[2.5rem] @5xl:text-[3.25rem]"
						>CIMAS Y NUBES</span
					><br />
					<span class="text-xl @5xl:text-3xl">LOS PIRINEOS A TUS PIES</span>
				</h1>

				<p class="text-md text-center font-sans text-neutral-200 @5xl:text-xl">
					Vuelos Biplaza en Parapente en Val d'Aran, <br />Ribagorza y rincones secretos
					del Pirineo. <br /><span class="font-semibold text-neutral-100"
						>¿Te atreves a descubrirlos?</span
					>
				</p>
			</div>

			<button
				onclick={() => (showModal = true)}
				aria-label="Reserva Tu Vuelo"
				class="cta-button-primary text-background @5xl:mt-6"
				><span class="font-sans text-xl font-semibold text-background @5xl:px-6 @5xl:py-2"
					>Reserva Tu Vuelo</span
				></button
			>
		</div>
	</div>
</section>

{#if showModal}
	<ContactModal bind:showModal title="Reserva Tu Vuelo" />
{/if}

<style>
	.overlay::before {
		content: '';
		position: absolute;
		inset: 0;
		z-index: 1;
		background: linear-gradient(
			to top,
			rgba(0, 0, 0, 0.632) 15%,
			rgba(0, 0, 0, 0.499) 40%,
			rgba(0, 0, 0, 0.214) 60%,
			rgba(0, 0, 0, 0.048) 100%
		);
	}

	@media (width >= 80rem) {
		.hero-image {
			object-position: right bottom;
		}

		.overlay::before {
			background: linear-gradient(
				to left,
				rgba(0, 0, 0, 0.456) 15%,
				rgba(0, 0, 0, 0.296) 45%,
				rgba(0, 0, 0, 0.279) 60%,
				rgba(0, 0, 0, 0.128) 100%
			);
		}
	}
</style>
