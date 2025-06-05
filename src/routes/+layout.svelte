<script lang="ts">
	import '../app.css';
	import '@fontsource-variable/noto-sans-thai';
	import '@fontsource/comic-neue';
	interface Props {
		children?: import('svelte').Snippet;
	}

	let { children }: Props = $props();
</script>

<div
	class="container mx-auto min-h-screen max-w-7xl bg-gray-100 py-6 sm:px-6 lg:px-8 dark:bg-gray-700"
>
	{@render children?.()}
</div>

<style>
	:global(body) {
		font-family: 'Noto Sans Thai Variable', sans-serif;
		font-family: 'Comic Neue', cursive;
	}
</style>
