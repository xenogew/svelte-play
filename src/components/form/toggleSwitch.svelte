<script lang="ts">
	export let toggleSwitch: ToggleOption;
</script>

<div class="relative w-10 mr-2 align-middle select-none transition duration-200 ease-in">
	<input
		type="checkbox"
		name={toggleSwitch.name}
		id={toggleSwitch.id}
		class="toggle-checkbox absolute block w-6 h-6 rounded-full bg-blue-700 checked:bg-gray-200 border-4 border-gray-300 appearance-none cursor-pointer"
		bind:checked={toggleSwitch.checked}
	/>
	<label
		for={toggleSwitch.id}
		class="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"
	/>
</div>
{#if toggleSwitch.message}
	<span
		class="text-xs text-gray-400 dark:text-gray-400 my-auto px-2"
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
