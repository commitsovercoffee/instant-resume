<script>
	import Pro from "./templates/pro.svelte";
	import Novice from "./templates/novice.svelte";
	import Menu from "./components/menu.svelte";

	let selectedTemplate = "pro";
</script>

<section class="mx-auto my-16 rounded-xl bg-pink-100 prose prose-pink">
	<h3 class="p-2 mx-4">Instant Resume</h3>
	<p class="p-4 m-2 text-xs">
		Click to select and Double click to edit text. <br /> Checkout
		the
		<a href="https://github.com/commitsovercoffee/instant-resume"
			>repo</a
		>
		for more info.
	</p>
</section>

<section class="mx-auto">
	{#if selectedTemplate === "pro"}
		<Pro />
	{/if}
	{#if selectedTemplate === "novice"}
		<Novice />
	{/if}
</section>

<Menu/>
