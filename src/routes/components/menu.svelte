<script>
	import { details } from "../stores/details.js";
	import { menu } from "../stores/menu.js";
	const opts = ["duplicate", "delete", "help"];
	let scrollX = 0;
	let scrollY = 0;

	$: posX = $menu.pos.x + scrollX;
	$: posY = $menu.pos.y + scrollY - 120;

	let parent = "";
	$: parent = $menu.parent;

	let items = [];
	$: items = $menu.items;

	let index = -1;
	$: index = $menu.index;

	function performOperation() {
		const parentArray = $details[parent];
		const menuContent = $menu.content;

		switch ($menu.opt) {
			case "duplicate":
				console.log(items.length);
				console.log(parentArray);
				if (items.length === 0) {
					$details[parent].splice(
						index,
						0,
						$details[parent][index]
					);
				} else {
					index = $menu.index;
					for (const item of items) {
						$details[item].splice(
							index,
							0,
							$details[item][index]
						);
					}
				}
				console.log(parentArray);
				break;
			case "delete":
				if (items.length === 0) {
					index =
						parentArray.indexOf(
							menuContent
						);
					if (index > -1) {
						parentArray.splice(index, 1);
					}
				} else {
					index = $menu.index;
					for (const item of items) {
						$details[item].splice(index, 1);
					}
				}
				console.log(parentArray);
				break;
		}

		$details[parent] = parentArray;
		$details[parent] = $details[parent];
	}
</script>

{#if $menu.visible}
	<section
		class="p-2 m-2 h-32 rounded-xl absolute bg-zinc-50 flex flex-col justify-around border-2 border-zinc-200"
		style="left:{posX}px; top:{posY}px;"
	>
		{#each opts as opt}
			<button
				class="p-1 px-2 m-2 text-xs hover:bg-zinc-200 rounded-xl"
				on:click={() => {
					($menu.opt = opt),
						console.log(
							$menu.content,
							"from",
							$menu.parent
						);

					performOperation();
				}}
			>
				{opt}
			</button>
		{/each}
	</section>
{/if}

<svelte:window
	bind:scrollX
	bind:scrollY
	on:scroll={() => {
		$menu.visible = false;
	}}
	on:click={() => {
		$menu.visible = false;
	}}
	on:contextmenu|preventDefault
/>
