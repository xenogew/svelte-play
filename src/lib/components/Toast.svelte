<script lang="ts">
	import { fade, fly } from 'svelte/transition';
	import type { Snippet } from 'svelte';

	interface Props {
		toasting: boolean;
		children?: Snippet;
	}

	let { toasting = $bindable(false), children }: Props = $props();
</script>

{#if toasting}
	<!-- Toast Notification Info -->
	<div
		onclick={async () => (toasting = !toasting)}
		onkeypress={(event) => {
			if (event.key === 'Escape') toasting = !toasting;
		}}
		in:fly|global={{ x: 100 }}
		out:fade|global
		class="fixed top-4 right-4 z-50 flex cursor-pointer items-center border-l-4 border-blue-700 bg-blue-400 p-4 shadow-md transition sm:absolute"
		role="button"
		tabindex="0"
	>
		<!-- icons -->
		<div class="mr-3 rounded-full bg-white text-blue-500">
			<svg
				width="1.8em"
				height="1.8em"
				viewBox="0 0 16 16"
				class="bi bi-info"
				fill="currentColor"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M8.93 6.588l-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588z"
				/>
				<circle cx="8" cy="4.5" r="1" />
			</svg>
		</div>
		<!-- message -->
		<div class="max-w-xs text-white">{@render children?.()}</div>
	</div>
{/if}
