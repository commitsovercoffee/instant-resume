<script>
	import { details } from "../stores/details.js";
	import { menu } from "../stores/menu.js";
	const opts = ["duplicate", "delete", "help"];
	let scrollX = 0;
	let scrollY = 0;

	$: posX = $menu.pos.x + scrollX;
	$: posY = $menu.pos.y + scrollY - 100;

	let parent = "";
	$: parent = $menu.parent;

	let index = -1;

	function performOperation() {
		const parentArray = $details[parent];
		const menuContent = $menu.content;

		switch ($menu.opt) {
			case "duplicate":
				index = parentArray.indexOf(menuContent);
				parentArray.splice(index, 0, menuContent);
				break;
			case "delete":
				index = parentArray.indexOf(menuContent);
				if (index > -1) {
					parentArray.splice(index, 1);
				}
				break;
		}

		$details[parent] = parentArray;
	}
</script>

{#if $menu.visible}
	<section
		class="p-2 m-2 h-28 rounded-xl absolute bg-zinc-50 flex flex-col"
		style="left:{posX}px; top:{posY}px;"
	>
		{#each opts as opt}
			<button
				class="p-1 m-1 text-xs"
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
