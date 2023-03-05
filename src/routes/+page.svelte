<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
	let fetchedPoints: number;
	let processed: number = 0;
	let managers: number = 10000;

	async function fetchManagerData(managerId: number) {
		const response = await fetch(`/api/fantasy?manager=${managerId}`);
		// const json = await response.json();
		// console.log(json.entry_history.points);
		// console.log(await response.json());
		fetchedPoints = await response.json();
		processed++;
	}

	async function click() {
		for (let i = 1; i <= managers; i++) {
			fetchManagerData(i);
		}
		// fetchManagerData(1);
	}

	// async function click() {
	// 	const response = await fetch('/api/fantasy/123?min=1&max=10');
	// 	console.log(await response.json());
	// }
</script>

<h1>Hello and welcome to my site!</h1>
<a href="/about">About my site</a>
<button class="btn" on:click={click}>BATON</button>
<progress class="progress progress-error w-56" value={processed} max={managers} />
<p>Points: {fetchedPoints}</p>
<p>Processed: {processed}</p>
