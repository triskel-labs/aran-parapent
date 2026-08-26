<script lang="ts">
	import AboutSection from '../components/sections/AboutSection.svelte';
	import HeroSection from '../components/sections/HeroSection.svelte';
	import MapsSection from '../components/sections/MapsSection.svelte';
	import ServicesSection from '../components/sections/ServicesSection.svelte';
	import SocialProof from '../components/sections/SocialProof.svelte';
	import FAQSection from '../components/sections/FAQSection.svelte';

	let { data } = $props();

	const structuredData = JSON.stringify({
		'@context': 'https://schema.org',
		'@type': 'SportsActivityLocation',
		name: 'Aran Parapent',
		url: 'https://aranparapent.com/',
		image: 'https://aranparapent.com/landscape-paraglide.webp',
		telephone: '+34649964007',
		email: 'aranparapent@gmail.com',
		address: {
			'@type': 'PostalAddress',
			addressRegion: "Val d'Aran",
			addressCountry: 'ES'
		},
		description:
			"Vuelos biplaza en parapente en Val d'Aran, Ribagorza y rincones secretos del Pirineo."
	}).replace(/</g, '\\u003c');
</script>

<svelte:head>
	<title>Aran Parapent | Vuelos biplaza en parapente en Val d'Aran</title>
	<meta
		name="description"
		content="Vuelos biplaza en parapente en Val d'Aran, Ribagorza y Pirineos con Aran Parapent. Reserva tu vuelo valle, térmico, Luchon o buggie."
	/>
	<link rel="canonical" href="https://aranparapent.com/" />
	<link
		rel="preload"
		as="image"
		href="/portrait-paraglide-cloud.webp"
		media="(max-width: 1279px)"
		fetchpriority="high"
	/>
	<link
		rel="preload"
		as="image"
		href="/landscape-paraglide.webp"
		media="(min-width: 1280px)"
		fetchpriority="high"
	/>
	<meta property="og:type" content="website" />
	<meta property="og:title" content="Aran Parapent | Vuela sobre los Pirineos" />
	<meta
		property="og:description"
		content="Vuelos biplaza en parapente en Val d'Aran, Ribagorza y rincones secretos del Pirineo."
	/>
	<meta property="og:image" content="https://aranparapent.com/landscape-paraglide.webp" />
	<meta name="twitter:card" content="summary_large_image" />
	{@html `<script type="application/ld+json">${structuredData}</script>`}
</svelte:head>

<div class="h-full">
	<HeroSection />
	<SocialProof reviews={data.reviews} />
	<ServicesSection />
	<FAQSection />
	<AboutSection />
	<MapsSection />
</div>
