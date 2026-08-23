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
</script>

<div class="card card-vertical relative flex w-full flex-col gap-4 rounded-lg p-6">
	<h1 class="text-lg font-semibold text-neutral-950">{service.title}</h1>

	<!-- Fixed size container with aspect ratio -->
	<div class="image-container-vertical rounded-lg object-center">
		<img
			src={service.imageUrl}
			alt={service.title}
			class="image-vertical object-center"
			style:object-position={service.imagePosition ?? 'center'}
		/>
	</div>

	<p class="text-neutral-800">{service.description}</p>
	<div class="row flex w-full justify-end">
		<p
			class="w-fit rounded-lg bg-neutral-100/75 px-4 py-2 text-right text-lg font-semibold text-neutral-900 shadow-md"
		>
			{service.price}€ - persona
		</p>
	</div>
</div>

<style>
	.card {
		background: rgba(242, 242, 242, 0.626);
		box-shadow: 1px 4px 5px rgba(0, 0, 0, 0.077);
		transition: all ease-in-out 0.3s;
	}

	.card:hover {
		background: rgba(242, 242, 242, 0.912);
	}

	/*VERTICAL*/
	.card-vertical {
		max-width: 350px;
	}

	/* Image Container to force uniform size */
	.image-container-vertical {
		width: 100%;
		aspect-ratio: 4 / 2.5; /* Ensures consistent height based on width */
		overflow: hidden;
		border-radius: 8px;
	}

	/* Ensure images cover the entire container */
	.image-vertical {
		width: 100%;
		height: 100%;
		object-fit: cover; /* Ensures uniform appearance */
		max-height: 250px;
	}
</style>
