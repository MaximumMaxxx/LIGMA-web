<script>
	import { fly } from 'svelte/transition';

	const minTime = 63;
	const maxTime = 72000;
	const corseAdjustStep = 28;
	const minDistance = 40;

	let timerTime = minTime;
	let coarseAdjustment = 1;
	let fineAdjustment = 1;

	let minTimeWarning = false;
	let maxTimeWarning = false;

	let originX = 0;
	let originY = 0;

	let destinationX = 100;
	let destinationY = 100;

	let momentumDistanceX = 0;
	let momentumDistanceY = 0;

	// Timer handling
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

	// Distance calculation
	$: {
		const xDiff = originX - destinationX;
		const yDiff = originY - destinationY;

		const targetDistance = Math.sqrt(xDiff * xDiff + yDiff * yDiff);

		if (targetDistance < minDistance) {
			console.log('Distance is too short');
		}

		const r = yDiff / xDiff;

		momentumDistanceX = targetDistance / 0.989 / Math.sqrt(r * r + 1);
		momentumDistanceY = momentumDistanceX * r;
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

	<hr class="w-4/5 mx-auto bg-black border border-slate-600 mt-2" />

	<form class="grid grid-cols-1 place-items-center gap-y-1 mt-4">
		<label for="originX">What is the coordinates of the launcher (blue glass)</label>
		<div class="grid grid-cols-2 gap-2">
			<input type="number" name="originX" bind:value={originX} />
			<input type="number" name="originY" bind:value={originY} />
		</div>

		<label for="originX">What is the coordinates of the center of the catching area</label>
		<div class="grid grid-cols-2 gap-2">
			<input type="number" name="destX" bind:value={destinationX} />
			<input type="number" name="destY" bind:value={destinationY} />
		</div>
		<p>You need X: {momentumDistanceX} Y: {momentumDistanceY}</p>
	</form>
</body>
