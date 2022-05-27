<script lang="ts">
	import Header from '../components/nav/header.svelte';
	import Footer from '../components/nav/footer.svelte';
	import Checkboxes from '../components/form/checkboxes.svelte';
	import ToggleSwitch from '../components/form/toggleSwitch.svelte';
	import CopyToClipboard from '../lib/copyToClipboard.svelte';
	import Toast from '../components/Toast.svelte';

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
	let toasting = false;

	const handleSuccessfullyCopied = (e: any) => {
		console.log(`successfully copied to clipboard! '${e.detail}'`);
	};

	const handleFailedCopy = () => {
		console.log('failed to copy :(');
	};

	const sleep = (m: number) => new Promise((r) => setTimeout(r, m));
</script>

<section
	class="max-w-4xl p-6 mx-auto bg-slate-100 sm:rounded-md shadow-md dark:bg-gray-900 relative"
>
	<Toast {toasting}>Copied to clipboard!</Toast>

	<Header />

	<form>
		<div class="grid grid-cols-1 gap-x-6 gap-y-3 sm:gap-6 mt-4 sm:grid-cols-4 py-6">
			<div class="text-left my-0 sm:my-auto sm:text-right cursor-default">
				<span class="text-gray-700 dark:text-gray-200">Password Length</span>
			</div>

			<div class="col-span-3">
				<Checkboxes name="pwdLength" items={lengthList} />
			</div>

			<div class="text-left my-0 sm:my-auto sm:text-right cursor-default">
				<label
					class="text-gray-700 dark:text-gray-200"
					for={symbolToggle.id}
					on:click|preventDefault>Include Symbols</label
				>
			</div>

			<div class="col-span-3">
				<ToggleSwitch toggleSwitch={symbolToggle} />
			</div>

			<div class="text-left my-0 sm:my-auto sm:text-right cursor-default">
				<label
					class="text-gray-700 dark:text-gray-200"
					for={numberToggle.id}
					on:click|preventDefault>Include Numbers</label
				>
			</div>

			<div class="col-span-3">
				<ToggleSwitch toggleSwitch={numberToggle} />
			</div>

			<div class="text-left my-0 sm:my-auto sm:text-right cursor-default">
				<label class="text-gray-700 dark:text-gray-200" for={lowerToggle.id} on:click|preventDefault
					>Include Lowercases</label
				>
			</div>

			<div class="col-span-3">
				<ToggleSwitch toggleSwitch={lowerToggle} />
			</div>

			<div class="text-left my-0 sm:my-auto sm:text-right cursor-default">
				<label class="text-gray-700 dark:text-gray-200" for={upperToggle.id} on:click|preventDefault
					>Include Uppercases</label
				>
			</div>

			<div class="col-span-3">
				<ToggleSwitch toggleSwitch={upperToggle} />
			</div>

			<div class="text-left my-0 sm:my-auto sm:text-right cursor-default">
				<label
					class="text-gray-700 dark:text-gray-200"
					for={similarToggle.id}
					on:click|preventDefault>Exclude Similar</label
				>
			</div>

			<div class="col-span-3">
				<ToggleSwitch toggleSwitch={similarToggle} />
			</div>

			<div class="text-left my-0 sm:my-auto sm:text-right cursor-default">
				<label
					class="text-gray-700 dark:text-gray-200"
					for={ambiguousToggle.id}
					on:click|preventDefault>Exclude Ambiguous</label
				>
			</div>

			<div class="col-span-3">
				<ToggleSwitch toggleSwitch={ambiguousToggle} />
			</div>
		</div>

		<div class="flex justify-center mt-6">
			<button
				class="px-6 py-2 leading-5 w-full text-white text-lg font-medium transition-colors duration-200 ease-in-out transform bg-blue-700 hover:bg-blue-800 focus:bg-blue-800 shadow-md hover:shadow-lg rounded-md focus:outline-none"
				>Generate</button
			>
		</div>

		<div class="py-6">
			<label class="text-gray-700 dark:text-gray-200" for="generated">Generated</label>
			<div
				class="bg-slate-500 dark:bg-slate-800 text-slate-200 dark:text-slate-400 shadow-md rounded-t-md p-8 mt-2"
			>
				<p class="break-all font-mono sm:text-lg text-sm max-h-fit overflow-hidden" id="generated">
					{#if generatedPassword}
						{generatedPassword}
					{:else}
						Output here...
					{/if}
				</p>
			</div>

			<CopyToClipboard
				text={generatedPassword}
				on:copy={handleSuccessfullyCopied}
				on:fail={handleFailedCopy}
				let:copy
			>
				<button
					class="flex flex-row justify-center gap-x-1 px-6 py-2 shadow-md w-full text-white transition-colors duration-200 transform bg-gray-700 rounded-b-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600 active:bg-gray-700 dark:active:bg-gray-500"
					on:click|preventDefault={copy}
					on:click|preventDefault={async () => {
						toasting = !toasting;
						await sleep(2000);
						toasting = !toasting;
					}}
					><span>Copy it</span>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="h-6 w-6 fill-transparent stroke-slate-50 stroke-2"
						viewBox="0 0 24 24"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
						/>
					</svg>
				</button>
			</CopyToClipboard>
		</div>
	</form>

	<hr class="my-10 border-gray-200 dark:border-gray-700" />

	<Footer />
</section>
