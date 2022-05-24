<script lang="ts">
	export let items: PasswordLength[];
	export let name: string;
</script>

<ul class="grid grid-flow-col auto-cols-min gap-x-2 max-w-md">
	{#each items as item}
		<li class="relative">
			<input
				class="sr-only peer"
				type="radio"
				value={item.len}
				{name}
				id={item.id}
				checked={item.checked}
			/>
			<label
				class="flex items-center justify-center w-9 h-9 antialiased text-lg text-blue-600 peer-checked:text-blue-700 peer-checked:font-bold bg-gray-200 dark:bg-gray-800 hover:bg-blue-100 dark:hover:bg-slate-700 hover:shadow-md border-2 border-blue-600 hover:ring-slate-200 dark:hover:ring-slate-700 peer-checked:ring-blue-700 peer-checked:ring-2 peer-checked:border-transparent peer-checked:bg-slate-200 dark:peer-checked:bg-slate-800 rounded-md cursor-pointer focus:outline-none focus:ring-0 font-medium leading-tight"
				for={item.id}>{item.len}</label
			>
			<div class="absolute hidden w-5 h-5 peer-checked:block bottom-0 right-0">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-6 w-6 stroke-green-700 stroke-2 fill-transparent"
					viewBox="0 0 24 24"
				>
					<path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
				</svg>
			</div>
		</li>
	{/each}
</ul>
