<script lang="ts">
	import { fade } from 'svelte/transition';

	interface Review {
		author_name: string;
		rating: number;
		text: string;
	}

	interface Props {
		review: Review;
		maxLength?: number;
	}

	let { review, maxLength = 175 }: Props = $props();
	const safeRating = $derived(Math.max(0, Math.min(5, Math.round(review.rating || 0))));
</script>

<article
	class="card z-10 flex min-h-[220px] w-[min(74vw,680px)] flex-col rounded-lg border border-neutral-300 bg-neutral-50 px-4 py-6 md:min-h-[210px] md:px-6"
	transition:fade
>
	<div class="flex items-start justify-between gap-4">
		<h3 class="text-lg font-semibold text-neutral-800">{review.author_name}</h3>
		<img src="/svg/google.svg" alt="Google Review" width="16" height="16" class="mt-1 size-4" />
	</div>

	<div class="flex flex-row gap-1" aria-label={`${safeRating} de 5 estrellas`}>
		<p class="stars" aria-hidden="true">{'★'.repeat(safeRating)}</p>
	</div>

	<p class="review-text pt-2 leading-relaxed text-neutral-700">
		{review.text.slice(0, maxLength)}{review.text.length > maxLength ? '...' : ''}
	</p>
</article>

<style>
	.card {
		box-shadow: 1px 4px 5px rgba(0, 0, 0, 0.077);
	}

	.stars {
		color: #d99a00;
		letter-spacing: 0.04em;
	}

	.review-text {
		display: -webkit-box;
		overflow: hidden;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 5;
		line-clamp: 5;
	}
</style>
