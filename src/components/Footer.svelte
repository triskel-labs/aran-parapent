<script>
	import ContactModal from './ContactModal.svelte';
	let showModal = $state(false);
</script>

<footer>
	<div class="flex flex-col items-center justify-center gap-6 p-10 lg:flex-row lg:justify-evenly">
		<div class="brand">
			<a href="/" aria-label="Aran Parapent inicio">
				<img
					src="/logo/logo-blanc.png"
					alt="Aran Parapent"
					width="160"
					height="102"
					loading="lazy"
					decoding="async"
					class="max-w-[8rem] transition-all @5xl:max-w-[10rem]"
				/>
			</a>
		</div>
		<nav class="flex flex-col items-center justify-center" aria-label="Navegación de pie de página">
			<a href="#services-section" class="font-normal text-neutral-300 hover:cursor-pointer hover:text-neutral-100">Servicios</a>
			<a href="#about-section" class="font-normal text-neutral-300 hover:cursor-pointer hover:text-neutral-100">Aran Parapent</a>
			<button type="button" onclick={() => (showModal = true)} class="font-normal text-neutral-300 hover:cursor-pointer hover:text-neutral-100">
				Contacto
			</button>
		</nav>
		<div class="contact flex flex-col items-center justify-center">
			<a href="tel:+34649964007" class="phone flex flex-row gap-2">
				<img src="/svg/phone.svg" alt="" width="20" height="20" class="size-5 invert" />
				<p class="text-neutral-100">+34 649 964 007</p>
			</a>

			<a href="mailto:aranparapent@gmail.com" class="email flex flex-row gap-2">
				<img src="/svg/email.svg" alt="" width="20" height="20" class="size-5 invert" />
				<p class="text-neutral-100">aranparapent@gmail.com</p>
			</a>

			<a
				href="https://instagram.com/aranparapent"
				class="flex flex-row gap-2 font-normal text-neutral-300 hover:text-neutral-100"
				target="_blank"
				rel="noreferrer"
			>
				<img src="/svg/instagram.svg" alt="" width="20" height="20" class="size-5 invert" />
				@aranparapent
			</a>
		</div>
	</div>
	<div class="rights mt-2 w-full border-t border-neutral-400 p-1">
		<p class="text-center text-xs text-neutral-200">© Todos los derechos reservados</p>
	</div>
</footer>

{#if showModal}
	<ContactModal bind:showModal />
{/if}

<style>
	footer {
		background: var(--secondaryGradientVertical);
	}
</style>
