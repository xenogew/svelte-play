<script lang="ts">
	import Header from '../components/nav/header.svelte';
	import Footer from '../components/nav/footer.svelte';
	import Checkboxes from '../components/form/checkboxes.svelte';
	import ToggleSwitch from '../components/form/toggleSwitch.svelte';

	// default initiate inputs
	let lengthList: PasswordLength[] = [
		{ id: 'len_8', len: 8 },
		{ id: 'len_16', len: 16, checked: true },
		{ id: 'len_32', len: 32 },
		{ id: 'len_64', len: 64 },
		{ id: 'len_128', len: 128 }
	];
	let symbolToggle: ToggleOption = { id: 'symbols', name: 'symbols', checked: true };
	let numberToggle: ToggleOption = { id: 'numbers', name: 'numbers', checked: true };
	let lowerToggle: ToggleOption = { id: 'lowers', name: 'lowers', checked: true };
	let upperToggle: ToggleOption = { id: 'uppers', name: 'uppers', checked: true };
	let similarToggle: ToggleOption = { id: 'similar', name: 'similar', checked: false };
	let ambiguousToggle: ToggleOption = { id: 'ambiguous', name: 'ambiguous', checked: false };

	let generatedPassword = '';
</script>

<section class="max-w-4xl p-6 mx-auto bg-white sm:rounded-md shadow-md dark:bg-gray-900">
	<Header />

	<form>
		<div class="grid grid-cols-1 gap-x-6 gap-y-3 sm:gap-6 mt-4 sm:grid-cols-4">
			<div class="text-left my-0 sm:my-auto sm:text-right cursor-default">
				<span class="text-gray-700 dark:text-gray-200">Password Length</span>
			</div>

			<div class="col-span-3">
				<Checkboxes name="pwdLength" items={lengthList} />
			</div>

			<div class="text-left my-0 sm:my-auto sm:text-right cursor-default">
				<span class="text-gray-700 dark:text-gray-200">Include Symbols</span>
			</div>

			<div class="col-span-3">
				<ToggleSwitch toggleSwitch={symbolToggle} />
			</div>

			<div class="text-left my-0 sm:my-auto sm:text-right cursor-default">
				<span class="text-gray-700 dark:text-gray-200">Include Numbers</span>
			</div>

			<div class="col-span-3">
				<ToggleSwitch toggleSwitch={numberToggle} />
			</div>

			<div class="text-left my-0 sm:my-auto sm:text-right cursor-default">
				<span class="text-gray-700 dark:text-gray-200">Include Lowercases</span>
			</div>

			<div class="col-span-3">
				<ToggleSwitch toggleSwitch={lowerToggle} />
			</div>

			<div class="text-left my-0 sm:my-auto sm:text-right cursor-default">
				<span class="text-gray-700 dark:text-gray-200">Include Uppercases</span>
			</div>

			<div class="col-span-3">
				<ToggleSwitch toggleSwitch={upperToggle} />
			</div>

			<div class="text-left my-0 sm:my-auto sm:text-right cursor-default">
				<span class="text-gray-700 dark:text-gray-200">Exclude Similar</span>
			</div>

			<div class="col-span-3">
				<ToggleSwitch toggleSwitch={similarToggle} />
			</div>

			<div class="text-left my-0 sm:my-auto sm:text-right cursor-default">
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

		<div class="py-6">
			<label class="text-gray-700 dark:text-gray-200" for="generated">Generated</label>
			<div class="bg-white shadow-xl p-8 my-2 text-slate-500 dark:bg-slate-800 dark:text-slate-400">
				<p class="break-all font-mono sm:text-lg text-sm max-h-fit overflow-hidden" id="generated">
					{#if generatedPassword}
						{generatedPassword}
					{:else}
						Output here...
					{/if}
				</p>
			</div>
		</div>
	</form>

	<hr class="my-10 border-gray-200 dark:border-gray-700" />

	<Footer />
</section>
