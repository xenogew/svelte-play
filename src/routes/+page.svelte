<script lang="ts">
	import Header from '$lib/components/nav/header.svelte';
	import Footer from '$lib/components/nav/footer.svelte';
	import Checkboxes from '$lib/components/form/checkboxes.svelte';
	import ToggleSwitch from '$lib/components/form/toggleSwitch.svelte';
	import Toast from '$lib/components/Toast.svelte';
	import CopyToClipboard from '$lib/copyToClipboard.svelte';

	// default initiate inputs
	let lengthList: PasswordLength[] = [
		{ id: 'len_8', len: 8 },
		{ id: 'len_16', len: 16, checked: true },
		{ id: 'len_32', len: 32 },
		{ id: 'len_64', len: 64 },
		{ id: 'len_128', len: 128 },
	];

	const DEFAULT_PWD_LENGTH = 16 as const;

	// make input binding reactive
	let pwdLength: number = $state(DEFAULT_PWD_LENGTH);
	let symbolToggle = $derived({
		id: 'symbols',
		name: 'symbols',
		checked: true,
		message: '( e.g. @#$%+& )',
	});
	let numberToggle = $derived({
		id: 'numbers',
		name: 'numbers',
		checked: true,
		message: '( e.g. 12345 )',
	});
	let lowerToggle = $derived({
		id: 'lowers',
		name: 'lowers',
		checked: true,
		message: '( e.g. abcdefghij )',
	});
	let upperToggle = $derived({
		id: 'uppers',
		name: 'uppers',
		checked: true,
		message: '( e.g. ABCDEFGHIJ )',
	});
	let similarToggle = $derived({
		id: 'similar',
		name: 'similar',
		checked: false,
		message: '( e.g. i, l, 1, L, o, 0, O )',
	});

	let generatedPassword = $state('');
	let toasting = $state(false);

	const sleep = (m: number) => new Promise((r: Function) => setTimeout(r, m));

	const fetchRandomPassword = async (
		event: SubmitEvent & { currentTarget: EventTarget & HTMLFormElement },
	) => {
		console.log('fetching data from API server...');
		event.preventDefault();
		const request: GeneratePasswordRequest = {
			pwd_length: pwdLength,
			symbol: symbolToggle.checked,
			number: numberToggle.checked,
			lower: lowerToggle.checked,
			upper: upperToggle.checked,
			x_similar: similarToggle.checked,
		};
		const response = await fetch('/api/random/password', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(request),
		});
		console.log('response retrieve');
		const jsonBody = await response.json();
		generatedPassword = jsonBody.pw;
	};

	const copyClipboard = async (
		event: MouseEvent & { currentTarget: EventTarget & HTMLButtonElement },
		copyFunc: Function,
	) => {
		event.preventDefault();

		copyFunc();

		toasting = !toasting;
		await sleep(2000);
		toasting = !toasting;
	};
</script>

<section
	class="relative mx-auto max-w-4xl bg-slate-100 p-6 shadow-md sm:rounded-md dark:bg-gray-900"
>
	<Toast {toasting}>Copied to clipboard!</Toast>

	<Header />

	<form onsubmit={fetchRandomPassword}>
		<div class="mt-4 grid grid-cols-1 gap-x-6 gap-y-3 py-6 sm:grid-cols-4 sm:gap-6">
			<div class="my-0 cursor-default text-left sm:my-auto sm:text-right">
				<span id="pw-length" class="text-gray-700 dark:text-gray-200">Password Length</span>
			</div>

			<div class="col-span-3">
				<Checkboxes name="pwdLength" items={lengthList} bind:value={pwdLength} />
			</div>

			<div class="my-0 cursor-default text-left sm:my-auto sm:text-right">
				<label class="text-gray-700 dark:text-gray-200" for={symbolToggle.id}>Include Symbols</label
				>
			</div>

			<div class="col-span-3 flex flex-row">
				<ToggleSwitch toggleSwitch={symbolToggle} />
			</div>

			<div class="my-0 cursor-default text-left sm:my-auto sm:text-right">
				<label class="text-gray-700 dark:text-gray-200" for={numberToggle.id}>Include Numbers</label
				>
			</div>

			<div class="col-span-3 flex flex-row">
				<ToggleSwitch toggleSwitch={numberToggle} />
			</div>

			<div class="my-0 cursor-default text-left sm:my-auto sm:text-right">
				<label class="text-gray-700 dark:text-gray-200" for={lowerToggle.id}
					>Include Lowercases</label
				>
			</div>

			<div class="col-span-3 flex flex-row">
				<ToggleSwitch toggleSwitch={lowerToggle} />
			</div>

			<div class="my-0 cursor-default text-left sm:my-auto sm:text-right">
				<label class="text-gray-700 dark:text-gray-200" for={upperToggle.id}
					>Include Uppercases</label
				>
			</div>

			<div class="col-span-3 flex flex-row">
				<ToggleSwitch toggleSwitch={upperToggle} />
			</div>

			<div class="my-0 cursor-default text-left sm:my-auto sm:text-right">
				<label class="text-gray-700 dark:text-gray-200" for={similarToggle.id}
					>Exclude Similar</label
				>
			</div>

			<div class="col-span-3 flex flex-row">
				<ToggleSwitch toggleSwitch={similarToggle} />
			</div>
		</div>

		<div class="mt-6 flex justify-center">
			<button
				class="w-full transform rounded-md bg-blue-700 px-6 py-2 text-lg leading-5 font-medium text-white shadow-md transition-colors duration-200 ease-in-out hover:bg-blue-800 hover:shadow-lg focus:bg-blue-800 focus:outline-none"
				>Generate</button
			>
		</div>

		<div class="py-6">
			<label class="text-gray-700 dark:text-gray-200" for="generated">Generated</label>
			<div
				class="mt-2 rounded-t-md bg-slate-500 p-8 text-slate-200 shadow-md dark:bg-slate-800 dark:text-slate-400"
			>
				<p class="max-h-fit overflow-hidden font-mono text-sm break-all sm:text-lg" id="generated">
					{#if generatedPassword}
						{generatedPassword}
					{:else}
						Output here...
					{/if}
				</p>
			</div>

			<CopyToClipboard
				text={generatedPassword}
				copy={async () => console.log(`copied to clipboard! 😎`)}
				fail={async () => console.log('failed to copy 😣')}
			>
				{#snippet children({ copy })}
					<button
						class="flex w-full transform flex-row justify-center gap-x-1 rounded-b-md bg-gray-700 px-6 py-2 text-white shadow-md transition-colors duration-200 hover:bg-gray-600 focus:bg-gray-600 focus:outline-none active:bg-gray-700 dark:active:bg-gray-500"
						onclick={async (e) => copyClipboard(e, copy)}
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
				{/snippet}
			</CopyToClipboard>
		</div>
	</form>

	<hr class="my-10 border-gray-200 dark:border-gray-700" />

	<Footer />
</section>
