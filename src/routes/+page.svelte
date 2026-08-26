<script lang="ts">
	import AboutSection from '../components/sections/AboutSection.svelte';
	import HeroSection from '../components/sections/HeroSection.svelte';
	import MapsSection from '../components/sections/MapsSection.svelte';
	import ServicesSection from '../components/sections/ServicesSection.svelte';
	import SocialProof from '../components/sections/SocialProof.svelte';
	import FAQSection from '../components/sections/FAQSection.svelte';
	import { services } from '$lib/services';

	let { data } = $props();

	const siteUrl = 'https://aranparapent.com/';
	const businessId = `${siteUrl}#business`;
	const structuredData = JSON.stringify({
		'@context': 'https://schema.org',
		'@graph': [
			{
				'@type': 'WebSite',
				'@id': `${siteUrl}#website`,
				url: siteUrl,
				name: 'Aran Parapent',
				inLanguage: 'es',
				publisher: { '@id': businessId }
			},
			{
				'@type': ['LocalBusiness', 'SportsActivityLocation'],
				'@id': businessId,
				name: 'Aran Parapent',
				url: siteUrl,
				image: `${siteUrl}landscape-paraglide.webp`,
				telephone: '+34649964007',
				email: 'aranparapent@gmail.com',
				priceRange: '€€',
				address: {
					'@type': 'PostalAddress',
					addressRegion: "Val d'Aran",
					addressCountry: 'ES'
				},
				areaServed: ["Val d'Aran", 'Ribagorza', 'Pirineos', 'Luchon'],
				description:
					"Vuelos biplaza en parapente en Val d'Aran, Ribagorza y rincones secretos del Pirineo.",
				sameAs: ['https://instagram.com/aranparapent']
			},
			{
				'@type': 'ItemList',
				'@id': `${siteUrl}#services`,
				name: 'Vuelos biplaza en parapente',
				itemListElement: services.map((service, index) => ({
					'@type': 'ListItem',
					position: index + 1,
					item: { '@id': `${siteUrl}#${service.slug}` }
				}))
			},
			...services.map((service) => ({
				'@type': 'Product',
				'@id': `${siteUrl}#${service.slug}`,
				name: service.title,
				description: `${service.description} Duración: ${service.duration}. Zona: ${service.area}.`,
				image: `${siteUrl}${service.imageUrl}`,
				brand: { '@id': businessId },
				category: 'Vuelo biplaza en parapente',
				offers: {
					'@type': 'Offer',
					price: service.price,
					priceCurrency: 'EUR',
					availability: 'https://schema.org/InStock',
					url: `${siteUrl}#services-section`,
					seller: { '@id': businessId }
				}
			}))
		]
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
