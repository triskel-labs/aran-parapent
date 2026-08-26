<script lang="ts">
	import type { Service } from '$lib/services';

	interface Props {
		service: Service;
	}

	let { service }: Props = $props();
	const imageSrc = $derived(service.imageUrl.startsWith('/') ? service.imageUrl : `/${service.imageUrl}`);
	const baseImage = $derived(imageSrc.replace(/\.webp$/, ''));
	const imageSrcset = $derived(
		service.imageUrl === 'hike-fly.webp'
			? `${baseImage}-480.webp 480w, ${baseImage}-700.webp 700w, ${imageSrc} 648w`
			: `${baseImage}-480.webp 480w, ${baseImage}-700.webp 700w, ${imageSrc} 900w`
	);
</script>

<article class="card flex h-full w-full max-w-[350px] flex-col gap-4 rounded-xl p-5 md:p-6">
	<h2 class="min-h-[1.75rem] text-lg font-semibold text-neutral-950">{service.title}</h2>

	<div class="image-container rounded-lg">
		<img
			src={imageSrc}
			srcset={imageSrcset}
			sizes="(max-width: 767px) min(350px, calc(100vw - 5rem)), (max-width: 1279px) 42vw, 320px"
			alt={service.title}
			width="700"
			height="1244"
			loading="lazy"
			decoding="async"
			class="image"
			style:object-position={service.imagePosition ?? 'center'}
		/>
	</div>

	<p class="description text-sm leading-relaxed text-neutral-800 md:text-base">{service.description}</p>

	<div class="mt-auto flex w-full justify-end pt-2">
		<p class="w-fit rounded-lg bg-neutral-100/80 px-4 py-2 text-right text-lg font-semibold text-neutral-900 shadow-md">
			{service.price}€ / persona
		</p>
	</div>
</article>

<style>
	.card {
		background: rgba(242, 242, 242, 0.626);
		box-shadow: 1px 4px 5px rgba(0, 0, 0, 0.077);
		transition:
			background 0.2s ease-in-out,
			transform 0.2s ease-in-out,
			box-shadow 0.2s ease-in-out;
	}

	.card:hover {
		background: rgba(242, 242, 242, 0.912);
		box-shadow: 0 16px 30px rgba(15, 23, 42, 0.14);
		transform: translateY(-2px);
	}

	.image-container {
		width: 100%;
		aspect-ratio: 4 / 2.6;
		overflow: hidden;
		background: linear-gradient(135deg, rgba(148, 163, 184, 0.25), rgba(241, 245, 249, 0.6));
	}

	.image {
		width: 100%;
		height: 100%;
		object-fit: cover;
		display: block;
	}

	.description {
		min-height: 9.5rem;
	}
</style>
