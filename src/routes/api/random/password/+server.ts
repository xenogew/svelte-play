import type { RequestEvent } from '@sveltejs/kit';

/** @type {import('@sveltejs/kit').RequestHandler} */
export async function POST({ request }: RequestEvent) {
	const req = await request.json();
	const baseUrl: string = import.meta.env.VITE_RUST_API_URL;
	const response: Response = await fetch(`${baseUrl}/api/v1/gen/password/random`, {
		method: 'POST',
		headers: {
			'content-type': 'application/json',
			accept: '*/*',
			'content-length': request.headers.get('content-length') as string,
			'accept-encoding': 'gzip, deflate, br'
		},
		body: JSON.stringify(req)
	});
	const jsonBody: GeneratePasswordResponse = (await response.json()) as GeneratePasswordResponse;
	return new Response(JSON.stringify(jsonBody), {
		headers: {
			'Content-Type': 'application/json'
		}
	});
}
