<script lang="ts">
	import { fade } from 'svelte/transition';
	import { onMount } from 'svelte';

	let showLoader = $state(false);
	let playerReady = $state(false);

	onMount(() => {
		const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
		let hideTimer: ReturnType<typeof setTimeout> | undefined;
		let startTimer: ReturnType<typeof setTimeout> | undefined;
		let idleId: number | undefined;

		if (prefersReducedMotion) {
			return;
		}

		const start = async () => {
			const { setWasmUrl } = await import('@lottiefiles/dotlottie-wc');
			setWasmUrl('/dotlottie-player.wasm');
			playerReady = true;
			showLoader = true;
			hideTimer = setTimeout(() => {
				showLoader = false;
			}, 1200);
		};

		startTimer = setTimeout(() => {
			if ('requestIdleCallback' in window) {
				idleId = window.requestIdleCallback(() => void start(), { timeout: 700 });
			} else {
				void start();
			}
		}, 120);

		return () => {
			clearTimeout(startTimer);
			clearTimeout(hideTimer);
			if (idleId) window.cancelIdleCallback(idleId);
		};
	});
</script>

{#if showLoader && playerReady}
	<div class="loader-veil" transition:fade={{ duration: 220 }} aria-hidden="true">
		<div class="loader-card">
			<dotlottie-wc src="/loader.lottie" autoplay loop style="width: 180px; height: 180px"></dotlottie-wc>
			<p>Estamos aterrizando...</p>
		</div>
	</div>
{/if}

<style>
	.loader-veil {
		position: fixed;
		inset: 0;
		z-index: 40;
		display: grid;
		place-items: center;
		pointer-events: none;
		background: linear-gradient(180deg, rgba(255, 255, 255, 0.82), rgba(255, 255, 255, 0.18));
		backdrop-filter: blur(2px);
	}

	.loader-card {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 0.25rem;
		padding: 0.75rem 1rem 1rem;
		border-radius: 1.25rem;
		background: rgba(255, 255, 255, 0.88);
		box-shadow: 0 18px 50px rgba(15, 23, 42, 0.18);
	}

	p {
		font-weight: 600;
		color: #262626;
	}

	@media (max-width: 640px) {
		.loader-card :global(dotlottie-wc) {
			width: 140px !important;
			height: 140px !important;
		}
	}
</style>
