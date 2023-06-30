<script>
	import { menu } from "../stores/menu.js";
	const opts = ["duplicate", "delete", "help"];
</script>

{#if $menu.visible}
	<section
		class="bg-teal-200 w-40 absolute"
		style="left:{$menu.pos.left}px; top:{$menu.pos.top - 80}px;  "
	>
		{#each opts as opt}
			<li>{opt}</li>
		{/each}
	</section>
{/if}
