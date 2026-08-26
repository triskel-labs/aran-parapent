<script lang="ts">
	import { onMount } from 'svelte';
	import ReviewCard from '../ReviewCard.svelte';
	import { fade } from 'svelte/transition';

	let { reviews } = $props();

	let currentIndex = $state(0);
	let interval: ReturnType<typeof setInterval> | undefined = $state();
	let sectionEl: HTMLElement;
	let videoEl: HTMLVideoElement;

	function goToMaps() {
		window.location.href = 'https://maps.app.goo.gl/YFqf97miC2ekGvPdA';
	}

	onMount(() => {
		startAutoSlide();

		const observer = new IntersectionObserver(
			(entries) => {
				const entry = entries[0];

				if (entry?.isIntersecting && videoEl) {
					videoEl.play().catch(() => {
						// Browser autoplay policies can still block in rare cases. Controls remain visible.
					});
					observer.disconnect();
				}
			},
			{ threshold: 0.45 }
		);

		if (sectionEl) {
			observer.observe(sectionEl);
		}

		return () => {
			clearInterval(interval);
			observer.disconnect();
		};
	});

	function startAutoSlide() {
		if (reviews.length <= 1) return;

		interval = setInterval(() => {
			currentIndex = (currentIndex + 1) % reviews.length;
		}, 6000);
	}

	function prevReview() {
		clearInterval(interval);
		currentIndex = (currentIndex - 1 + reviews.length) % reviews.length;
		startAutoSlide();
	}

	function nextReview() {
		clearInterval(interval);
		currentIndex = (currentIndex + 1) % reviews.length;
		startAutoSlide();
	}
</script>

<section
	bind:this={sectionEl}
	id="social-section"
	class="socialproof flex h-full w-full flex-col-reverse items-center justify-center gap-8 bg-neutral-200 px-4 py-16 md:flex-row md:py-28"
>
	<div class="flex h-full w-full flex-col items-center justify-center gap-8 px-2 md:ml-16 md:gap-5">
		<div class="flex flex-col items-center justify-center gap-2">
			<h1 class="sifon pt-8 text-center text-3xl text-neutral-900 lg:pt-0 lg:text-4xl">
				TU SUEÑO Y EL NUESTRO <br />
				<span class="text-[2rem] lg:text-[2.5rem]">HECHO REALIDAD</span>
			</h1>
			<p class="text-md max-w-2xl text-center font-sans text-neutral-800 md:text-xl">
				Volar en parapente en las montañas de casa es el sueño y privilegio de nuestra vida.
				Únete a los que ya lo han compartido con nosotros:
			</p>
		</div>
		<div class="carousel flex flex-row items-center justify-center gap-2 md:gap-8" transition:fade>
			{#if reviews.length > 0}
				<button
					type="button"
					onclick={prevReview}
					class="rounded-full p-2 opacity-35 transition hover:cursor-pointer hover:bg-neutral-900/10 hover:opacity-80"
					aria-label="Ver reseña anterior"
				>
					<img src="/svg/left.svg" alt="" width="32" height="32" class="max-w-8" />
				</button>
				<ReviewCard review={reviews[currentIndex]} />
				<button
					type="button"
					onclick={nextReview}
					class="rounded-full p-2 opacity-35 transition hover:cursor-pointer hover:bg-neutral-900/10 hover:opacity-80"
					aria-label="Ver reseña siguiente"
				>
					<img src="/svg/right.svg" alt="" width="32" height="32" class="max-w-8" />
				</button>
			{:else}
				<p class="rounded-lg bg-neutral-50/70 px-4 py-3 font-semibold text-neutral-800">
					Cargando Google Reviews...
				</p>
			{/if}
		</div>
		<button
			type="button"
			class="w-fit rounded-full bg-neutral-900/30 px-4 py-2 shadow-sm transition hover:cursor-pointer hover:bg-neutral-900"
			onclick={goToMaps}
			aria-label="Ir a Google Reviews"
			><span class="text-sm font-normal text-neutral-50">Ir a Google Reviews</span></button
		>
	</div>
	<div class="flex h-full w-full flex-col items-center justify-center">
		<div class="video-container rounded-xl border border-neutral-500 shadow-lg">
			<video
				bind:this={videoEl}
				controls
				muted
				playsinline
				preload="metadata"
				poster="/video-cover.webp"
				aria-label="Video de vuelo biplaza en parapente con Aran Parapent"
			>
				<track kind="captions" />
				<source src="/aran-parapent-video.webm" type="video/webm" />
				Tu navegador no es compatible con el video.
			</video>
		</div>
		<p class="mt-3 text-center text-sm text-neutral-600">El video se reproduce sin sonido al llegar aquí.</p>
	</div>
</section>

<style>
	.carousel {
		min-height: 250px;
		position: relative;
	}

	.video-container {
		max-width: 375px;
		width: 100%;
		height: min(525px, 82vh);
		overflow: hidden;
		background: #111827;
	}

	video {
		width: 100%;
		height: 100%;
		object-fit: cover;
		display: block;
	}
</style>
