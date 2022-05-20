<script lang="ts">
	export let toggleSwitch: any;
</script>

<div
	class="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in"
>
	<input
		type="checkbox"
		name={toggleSwitch.name}
		id={toggleSwitch.id}
		class="toggle-checkbox absolute block w-6 h-6 rounded-full bg-gray-500 checked:bg-gray-200 border-4 appearance-none cursor-pointer"
		bind:checked={toggleSwitch.checked}
	/>
	<label
		for={toggleSwitch.id}
		class="toggle-label block overflow-hidden h-6 rounded-full bg-gray-500 checked:bg-blue-300 cursor-pointer"
	/>
</div>

<style>
	.toggle-checkbox:checked {
		right: 0;
		border-color: #374151;
	}
	.toggle-checkbox:checked + .toggle-label {
		background-color: #374151;
	}
</style>
