import type { RequestEvent } from '@sveltejs/kit';

/** @type {import('@sveltejs/kit').RequestHandler} */
export async function get() {
	const baseUrl: string = import.meta.env.VITE_RUST_API_URL;
	const response = await fetch(`${baseUrl}/api/v1/gen/password/random`);
	const jsonBody = await response.json();
	return {
		headers: {
			'Content-Type': 'application/json'
		},
		body: jsonBody
	};
}

/** @type {import('@sveltejs/kit').RequestHandler} */
export async function post({ request }: RequestEvent) {
	const baseUrl: string = import.meta.env.VITE_RUST_API_URL;
	const response = await fetch(`${baseUrl}/api/v1/gen/password/random`);
	const jsonBody = await response.json();
	return {
		headers: {
			'Content-Type': 'application/json'
		},
		body: jsonBody
	};
}
