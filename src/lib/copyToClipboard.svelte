<script lang="ts">
	import type { Snippet } from 'svelte';
	interface Props {
		text: string;
		children?: Snippet<[any]>;
		copy: Function;
		fail: Function;
	}

	let { text, children, copy, fail }: Props = $props();

	copy = async () => {
		try {
			await navigator.clipboard.writeText(text);
		} catch {
			fail();
		}
	};
</script>

{@render children?.({ copy, fail })}
