/** @type {import('@sveltejs/kit').RequestHandler} */
export async function get() {
	const response = await fetch('http://127.0.0.1:8080/api/v1/gen/password/random');
	const jsonBody = await response.json();
	return {
		headers: {
			'Content-Type': 'application/json'
		},
		body: jsonBody
	};
}
