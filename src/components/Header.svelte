<script lang="ts">
	import { onMount } from 'svelte';
	import ContactModal from './ContactModal.svelte';

	let showModal = $state(false);
	let isScrolled = $state(false);
	let menuOpen = $state(false);

	const handleScroll = () => {
		isScrolled = window.scrollY > 10;
	};

	onMount(() => {
		window.addEventListener('scroll', handleScroll, { passive: true });
		handleScroll();

		return () => {
			window.removeEventListener('scroll', handleScroll);
			document.body.style.overflow = '';
		};
	});

	const setMenuOpen = (open: boolean) => {
		menuOpen = open;
		document.body.style.overflow = open ? 'hidden' : '';
	};

	const toggleMenu = () => setMenuOpen(!menuOpen);

	const openContactFromMenu = () => {
		setMenuOpen(false);
		showModal = true;
	};
</script>

<header
	class="@container fixed left-0 top-0 z-50 w-full transition-all"
	class:scrolled={isScrolled}
	class:openMenu={menuOpen}
	class:darkened={menuOpen}
>
	<div class="flex w-full flex-row items-center justify-between p-4 @5xl:justify-around">
		<a href="/" aria-label="Aran Parapent inicio">
			<img
				src="/logo/logo-blanc.png"
				alt="Aran Parapent"
				width="112"
				height="72"
				loading="eager"
				decoding="async"
				class="{isScrolled ? 'max-w-[5rem]' : 'max-w-[6rem]'} transition-all @5xl:{isScrolled
					? 'max-w-[6rem]'
					: 'max-w-[7rem]'}"
			/>
		</a>

		<nav
			class="hidden flex-row items-center justify-center space-x-6 transition-all @lg:flex {isScrolled
				? 'lg:opacity-100'
				: 'lg:opacity-0'}"
			aria-label="Navegación principal"
		>
			<a href="#services-section" class="font-normal text-neutral-100 hover:text-neutral-50">Servicios</a>
			<a href="#about-section" class="font-normal text-neutral-100 hover:text-neutral-50">Aran Parapent</a>
			<button
				type="button"
				onclick={() => (showModal = true)}
				class="font-normal text-neutral-100 hover:cursor-pointer hover:text-neutral-50"
			>
				Contacto
			</button>
			<a
				href="https://instagram.com/aranparapent"
				class="font-normal text-neutral-300 hover:text-neutral-100"
				aria-label="Instagram de Aran Parapent"
				target="_blank"
				rel="noreferrer"
			>
				<img src="/svg/instagram.svg" alt="" width="20" height="20" class="size-5 invert" />
			</a>
		</nav>

		<button
			class="block rounded-md p-2 focus:outline-none @lg:hidden"
			type="button"
			onclick={toggleMenu}
			aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
			aria-expanded={menuOpen}
		>
			<span class="text-3xl font-semibold text-neutral-100">☰</span>
		</button>
	</div>

	<div class="flex h-full w-full items-center justify-center @lg:hidden" class:hidden={!menuOpen}>
		<nav class="flex h-full w-full flex-col items-center space-y-4 p-4" aria-label="Menú móvil">
			<a onclick={() => setMenuOpen(false)} href="#services-section" class="font-normal text-neutral-300 hover:text-neutral-100">Servicios</a>
			<a onclick={() => setMenuOpen(false)} href="#about-section" class="font-normal text-neutral-300 hover:text-neutral-100">Aran Parapent</a>
			<button type="button" onclick={openContactFromMenu} class="font-normal text-neutral-300 hover:cursor-pointer hover:text-neutral-100">
				Contacto
			</button>
			<a
				onclick={() => setMenuOpen(false)}
				href="https://instagram.com/aranparapent"
				class="flex flex-row gap-2 font-normal text-neutral-300 hover:text-neutral-100"
				aria-label="Instagram de Aran Parapent"
				target="_blank"
				rel="noreferrer"
			>
				<img src="/svg/instagram.svg" alt="" width="20" height="20" class="size-5 invert" />
			</a>
		</nav>
	</div>
</header>

{#if showModal}
	<ContactModal bind:showModal />
{/if}

<style>
	.scrolled {
		height: 70px;
		background: rgba(47, 47, 47, 0.35);
		backdrop-filter: blur(10px);
		-webkit-backdrop-filter: blur(10px);
		transition: all ease-in-out 0.3s;
	}

	.openMenu {
		height: 100dvh;
		transition: all ease-in-out 0.3s;
	}

	.darkened {
		background: rgba(0, 0, 0, 0.82) !important;
		backdrop-filter: blur(15px) !important;
		-webkit-backdrop-filter: blur(15px) !important;
	}
</style>
