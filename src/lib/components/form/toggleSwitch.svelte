<script lang="ts">
	interface Props {
		toggleSwitch: ToggleOption;
	}

	let { toggleSwitch = $bindable() }: Props = $props();
</script>

<div class="relative mr-2 w-10 align-middle transition duration-200 ease-in select-none">
	<input
		type="checkbox"
		name={toggleSwitch.name}
		id={toggleSwitch.id}
		class="toggle-checkbox absolute block h-6 w-6 cursor-pointer appearance-none rounded-full border-4 border-gray-300 bg-blue-700 checked:bg-gray-200"
		bind:checked={toggleSwitch.checked}
	/>
	<label
		for={toggleSwitch.id}
		class="toggle-label block h-6 cursor-pointer overflow-hidden rounded-full bg-gray-300"
	></label>
</div>
{#if toggleSwitch.message}
	<span
		class="my-auto px-2 text-xs text-gray-400 dark:text-gray-400"
		class:line-through={!toggleSwitch.checked}>{toggleSwitch.message}</span
	>
{/if}

<style>
	.toggle-checkbox:checked {
		right: 0;
		border-color: rgb(29 78 216);
	}
	.toggle-checkbox:checked + .toggle-label {
		background-color: rgb(29 78 216);
	}
</style>
