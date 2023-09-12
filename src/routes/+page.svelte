<script>
	import { fly } from 'svelte/transition';

	const minTime = 63;
	const maxTime = 72000;
	const corseAdjustStep = 28;

	let timerTime = minTime;
	let coarseAdjustment = 1;
	let fineAdjustment = 1;

	let minTimeWarning = false;
	let maxTimeWarning = false;

	$: {
		if (timerTime < 0) {
			timerTime = 0;
		}

		if (timerTime < minTime) {
			minTimeWarning = true;
		} else {
			minTimeWarning = false;
		}

		if (timerTime > maxTime) {
			maxTimeWarning = true;
		} else {
			maxTimeWarning = false;
		}

		coarseAdjustment = Math.floor((timerTime - minTime) / corseAdjustStep) + 1;
		fineAdjustment = ((timerTime - minTime) % corseAdjustStep) + 1;
	}
</script>

<body class="min-h-screen bg-orange-200">
	<header>
		<div class="h-14 bg-blue-500 grid place-content-center">
			<h1 class="text-white text-center text-4xl font-semibold sans font-sans">
				LIGMA Config Tool
			</h1>
		</div>
	</header>

	<form class="grid grid-cols-1 place-items-center gap-y-1 mt-4">
		<label for="time">How long you want the timer to run (ticks)</label>
		<input type="number" name="time" id="timerTime" bind:value={timerTime} />
		<p>Coarse adjust: {coarseAdjustment}</p>
		<p>Fine adjust: {fineAdjustment}</p>

		{#if minTimeWarning}
			<p
				class="text-black bg-red-400 w-64 rounded-lg p-2 text-center border-red-800 border"
				transition:fly={{ y: 10, duration: 100 }}
			>
				The timer can't count faster than {minTime} ticks
			</p>
		{/if}

		{#if maxTimeWarning}
			<p
				class="text-black bg-red-400 w-64 rounded-lg p-2 text-center border border-red-800"
				transition:fly={{ y: 10, duration: 100 }}
			>
				The timer can't count past {maxTime} ticks, try increasing the golem count
			</p>
		{/if}
	</form>
</body>
