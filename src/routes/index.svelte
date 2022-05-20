<script lang="ts">
	import Header from '../components/nav/header.svelte';
	import Checkboxes from '../components/form/checkboxes.svelte';
	import ToggleSwitch from '../components/form/toggleSwitch.svelte';

	let lengthList = [
		{ id: 'len_8', len: 8 },
		{ id: 'len_16', len: 16, checked: true },
		{ id: 'len_32', len: 32 },
		{ id: 'len_64', len: 64 },
		{ id: 'len_128', len: 128 }
	];
	let symbolToggle = { id: 'symbols', name: 'symbols', checked: true };
	let numberToggle = { id: 'numbers', name: 'numbers', checked: true };
	let lowerToggle = { id: 'lowers', name: 'lowers', checked: true };
	let upperToggle = { id: 'uppers', name: 'uppers', checked: true };
	let similarToggle = { id: 'similar', name: 'similar', checked: false };
	let ambiguousToggle = { id: 'ambiguous', name: 'ambiguous', checked: false };
</script>

<section class="max-w-4xl p-6 mx-auto bg-white sm:rounded-md shadow-md dark:bg-gray-900">
	<Header />

	<form>
		<div class="grid grid-cols-1 gap-x-6 gap-y-3 sm:gap-6 mt-4 sm:grid-cols-4">
			<div class="text-left my-0 sm:my-auto sm:text-right">
				<span class="text-gray-700 dark:text-gray-200">Password Length</span>
			</div>

			<div class="col-span-3">
				<Checkboxes name="pwdLength" items={lengthList} />
			</div>

			<div class="text-left my-0 sm:my-auto sm:text-right">
				<span class="text-gray-700 dark:text-gray-200">Include Symbols</span>
			</div>

			<div class="col-span-3">
				<ToggleSwitch toggleSwitch={symbolToggle} />
			</div>

			<div class="text-left my-0 sm:my-auto sm:text-right">
				<span class="text-gray-700 dark:text-gray-200">Include Numbers</span>
			</div>

			<div class="col-span-3">
				<ToggleSwitch toggleSwitch={numberToggle} />
			</div>

			<div class="text-left my-0 sm:my-auto sm:text-right">
				<span class="text-gray-700 dark:text-gray-200">Include Lowercases</span>
			</div>

			<div class="col-span-3">
				<ToggleSwitch toggleSwitch={lowerToggle} />
			</div>

			<div class="text-left my-0 sm:my-auto sm:text-right">
				<span class="text-gray-700 dark:text-gray-200">Include Uppercases</span>
			</div>

			<div class="col-span-3">
				<ToggleSwitch toggleSwitch={upperToggle} />
			</div>

			<div class="text-left my-0 sm:my-auto sm:text-right">
				<span class="text-gray-700 dark:text-gray-200">Exclude Similar</span>
			</div>

			<div class="col-span-3">
				<ToggleSwitch toggleSwitch={similarToggle} />
			</div>

			<div class="text-left my-0 sm:my-auto sm:text-right">
				<span class="text-gray-700 dark:text-gray-200">Exclude Ambiguous</span>
			</div>

			<div class="col-span-3">
				<ToggleSwitch toggleSwitch={ambiguousToggle} />
			</div>
		</div>

		<div class="flex justify-center mt-6">
			<button
				class="px-6 py-2 leading-5 w-full text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
				>Generate</button
			>
		</div>
	</form>

	<hr class="my-10 border-gray-200 dark:border-gray-700" />

	<div class="w-full -mx-6">
		<div class="px-6">
			<div>
				<h3
					class="text-sm font-bold text-gray-800 dark:text-white hover:text-gray-700 dark:hover:text-gray-300 sm:text-md"
				>
					Credit
				</h3>
			</div>

			<a
				class="max-w-md mt-2 text-gray-500 text-sm sm:text-base dark:text-gray-400"
				href="https://www.flaticon.com/free-icons/password"
				title="password icons">Password icons created by Freepik - Flaticon</a
			>
		</div>
	</div>

	<div class="sm:flex sm:items-center sm:justify-between mt-6">
		<p class="text-sm text-gray-400">© Copyright 2021. All Rights Reserved.</p>

		<div class="flex mt-3 -mx-2 sm:mt-0">
			<a
				href="https://github.com/xenogew/svelte-play"
				class="mx-2 text-gray-400 hover:text-gray-500 dark:hover:text-gray-300"
				aria-label="Github - View Source"
				target="_blank"
			>
				<svg
					class="w-5 h-5 fill-current"
					viewBox="0 0 24 24"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M12.026 2C7.13295 1.99937 2.96183 5.54799 2.17842 10.3779C1.395 15.2079 4.23061 19.893 8.87302 21.439C9.37302 21.529 9.55202 21.222 9.55202 20.958C9.55202 20.721 9.54402 20.093 9.54102 19.258C6.76602 19.858 6.18002 17.92 6.18002 17.92C5.99733 17.317 5.60459 16.7993 5.07302 16.461C4.17302 15.842 5.14202 15.856 5.14202 15.856C5.78269 15.9438 6.34657 16.3235 6.66902 16.884C6.94195 17.3803 7.40177 17.747 7.94632 17.9026C8.49087 18.0583 9.07503 17.99 9.56902 17.713C9.61544 17.207 9.84055 16.7341 10.204 16.379C7.99002 16.128 5.66202 15.272 5.66202 11.449C5.64973 10.4602 6.01691 9.5043 6.68802 8.778C6.38437 7.91731 6.42013 6.97325 6.78802 6.138C6.78802 6.138 7.62502 5.869 9.53002 7.159C11.1639 6.71101 12.8882 6.71101 14.522 7.159C16.428 5.868 17.264 6.138 17.264 6.138C17.6336 6.97286 17.6694 7.91757 17.364 8.778C18.0376 9.50423 18.4045 10.4626 18.388 11.453C18.388 15.286 16.058 16.128 13.836 16.375C14.3153 16.8651 14.5612 17.5373 14.511 18.221C14.511 19.555 14.499 20.631 14.499 20.958C14.499 21.225 14.677 21.535 15.186 21.437C19.8265 19.8884 22.6591 15.203 21.874 10.3743C21.089 5.54565 16.9181 1.99888 12.026 2Z"
					/>
				</svg>
			</a>
		</div>
	</div>
</section>
