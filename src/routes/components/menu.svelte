<script>
	import { menu } from "../stores/menu.js";
	const opts = ["duplicate", "delete", "help"];
	let scrollX = 0;
	let scrollY = 0;

	$: posX = $menu.pos.x + scrollX;
	$: posY = $menu.pos.y + scrollY - 100;
</script>

{#if $menu.visible}
	<section
		class="p-2 m-2 h-28 rounded-xl absolute bg-zinc-50"
		style="left:{posX}px; top:{posY}px;"
	>
		{#each opts as opt}
			<p class="p-1 m-1 text-xs">
				{opt}
			</p>
		{/each}
	</section>
{/if}

<svelte:window
	bind:scrollX
	bind:scrollY
	on:scroll={() => {
		$menu.visible = false;
	}}
/>
