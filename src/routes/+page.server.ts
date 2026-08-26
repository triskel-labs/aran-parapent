import { env } from '$env/dynamic/private';
import type { PageServerLoad } from './$types';

const API_KEY = env.GOOGLE_MAPS_API_KEY;
const PLACE_ID = 'ChIJPWVVTMuRqBIRmw1nAwK8y-g';
const REVIEWS_TIMEOUT_MS = 1500;

export const load: PageServerLoad = async ({ fetch, request }) => {
	if (!API_KEY) {
		return { reviews: [] };
	}

	const acceptLanguage = request.headers.get('accept-language') || 'es';
	const language = acceptLanguage.split(',')[0].split('-')[0];
	const controller = new AbortController();
	const timeout = setTimeout(() => controller.abort(), REVIEWS_TIMEOUT_MS);

	try {
		const apiUrl = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${PLACE_ID}&fields=reviews&language=${language}&key=${API_KEY}`;
		const response = await fetch(apiUrl, { signal: controller.signal });

		if (!response.ok) {
			return { reviews: [] };
		}

		const data = await response.json();

		return {
			reviews: data.result?.reviews || []
		};
	} catch (error) {
		if (error instanceof Error && error.name !== 'AbortError') {
			console.error('Error fetching Google reviews');
		}

		return { reviews: [] };
	} finally {
		clearTimeout(timeout);
	}
};
