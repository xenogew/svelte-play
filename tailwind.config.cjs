module.exports = {
	mode: 'jit',
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			fontFamily: {
				comic: ['Comic Neue', 'cursive'],
			}
		}
	},
	plugins: []
};
