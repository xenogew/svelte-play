<script lang="ts">
	interface Props {
		items: PasswordLength[];
		name: string;
		value?: number;
	}

	let { items, name, value = $bindable(16) }: Props = $props();
</script>

<ul class="grid max-w-md auto-cols-min grid-flow-col gap-x-2">
	{#each items as item}
		<li class="relative">
			<input
				class="peer sr-only"
				type="radio"
				value={item.len}
				{name}
				id={item.id}
				bind:group={value}
			/>
			<label
				class="flex h-9 w-9 cursor-pointer items-center justify-center rounded-md border-2 border-blue-600 bg-gray-200 text-lg leading-tight font-medium text-blue-600 antialiased peer-checked:border-transparent peer-checked:bg-slate-200 peer-checked:font-bold peer-checked:text-blue-700 peer-checked:ring-2 peer-checked:ring-blue-700 hover:bg-blue-100 hover:shadow-md hover:ring-slate-200 focus:ring-0 focus:outline-none dark:bg-gray-800 dark:peer-checked:bg-slate-800 dark:hover:bg-slate-700 dark:hover:ring-slate-700"
				for={item.id}>{item.len}</label
			>
			<div class="absolute right-0 bottom-0 hidden h-5 w-5 peer-checked:block">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-6 w-6 fill-transparent stroke-green-700 stroke-2"
					viewBox="0 0 24 24"
				>
					<path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
				</svg>
			</div>
		</li>
	{/each}
</ul>
