import { json } from '@sveltejs/kit';
import type { RequestEvent } from '@sveltejs/kit';
import { RUST_API_URL } from "$env/static/private";

export async function POST({ request }: RequestEvent) {
	const req = await request.json();
	const response: Response = await fetch(`${RUST_API_URL}/api/v1/gen/password/random`, {
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
	return json(jsonBody,
		{
		headers: {
			'Content-Type': 'application/json'
		},
	});
}
