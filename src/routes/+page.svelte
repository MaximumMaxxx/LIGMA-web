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
	let originZ = 0;

	let destinationX = 100;
	let destinationZ = 100;

	let delayLong = 0;
	let delayShort = 0;

	let xResetDir = true;

	let longMomentum = 0;
	let shortMomentum = 0;

	let frictionValue = 0.9

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

		coarseAdjustment = Math.floor((timerTime - 23) / corseAdjustStep) + 1;
		fineAdjustment = timerTime - 23 - (28*Math.floor((timerTime-24)/28));
	}

	// Distance calculation
	$: {
		const xDiff = Math.abs(originX - destinationX);
		const zDiff = Math.abs(originZ - destinationZ);


		if (xDiff < minDistance || zDiff < minDistance) {
			console.log('Distance is too short');
		}

		let momentumX = xDiff / frictionValue;
		let momentumZ = zDiff / frictionValue;

		// This comes from taking a minimum time shot and finding the momentum imparted
		// This comes out to 54, so if the timer instantly went off it would still get 54 momentum


		if (Math.abs(momentumX) < Math.abs(momentumZ)) {
			xResetDir = true;
			longMomentum = momentumZ;
			shortMomentum = momentumX;
		} else {
			xResetDir = false;
			longMomentum = momentumX;
			shortMomentum = momentumZ;
		}
		
		delayLong = Math.abs(longMomentum)-44;
		delayShort = delayLong-Math.abs(shortMomentum);
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
			<input type="number" name="originY" bind:value={originZ} />
		</div>

		<label for="originX">What is the coordinates of the center of the catching area</label>
		<div class="grid grid-cols-2 gap-2">
			<input type="number" name="destX" bind:value={destinationX} />
			<input type="number" name="destY" bind:value={destinationZ} />
			<input type="number" name="frictionValue" bind:value={frictionValue}> 
		</div>
		<p>You need a send it delay of: {Math.round(delayLong)} and reset it delay of: {Math.round(delayShort)}. The Launch Direction Light will be {xResetDir ? "on": "off"}</p>
		<p>Expected momentum is: long, {longMomentum} and short, {shortMomentum} </p>
	</form>
</body>
