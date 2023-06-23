<script>
	let menuOptions = ['Add', 'Edit', 'Delte'];
	let menu = false;
	let menuPos = { x: 0, y: 0 };

	function handleRightClick(event) {
		menu = true;
		console.log('right click happened !');
		console.log(event.clientX, event.clientY);

		menuPos.x = event.clientX;
		menuPos.y = event.clientY;
	}
</script>

<svelte:window
	on:contextmenu|preventDefault={handleRightClick}
	on:click={() => {
		menu = false;
	}}
/>

<section class="mx-auto max-w-prose bg-red-100 h-screen">
	{#if menu}
		<ul
			style="top:{menuPos.y}px; left:{menuPos.x}px"
			class="absolute rounded-xl bg-lime-100 prose w-40"
		>
			{#each menuOptions as opt}
				<li class="p-2 hover:bg-lime-300">{opt}</li>
			{/each}
		</ul>
	{/if}
</section>
