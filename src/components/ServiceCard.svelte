<script lang="ts">
	interface Service {
		title: string;
		description: string;
		imageUrl: string;
		imagePosition?: string;
		price: string;
	}

	interface Props {
		service: Service;
	}

	let { service }: Props = $props();
	const imageSrc = $derived(service.imageUrl.startsWith('/') ? service.imageUrl : `/${service.imageUrl}`);
</script>

<article class="card flex h-full w-full max-w-[350px] flex-col gap-4 rounded-xl p-5 md:p-6">
	<h2 class="min-h-[1.75rem] text-lg font-semibold text-neutral-950">{service.title}</h2>

	<div class="image-container rounded-lg">
		<img
			src={imageSrc}
			alt={service.title}
			width="700"
			height="444"
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
