<script>
	import Pro from "./templates/pro.svelte";
	import Novice from "./templates/novice.svelte";
	import Menu from "./components/menu.svelte";

	let selectedTemplate = "pro";
</script>

<div class="mx-auto mb-16 prose prose-pink">
	<section class="p-2 m-2">
		<h3>Instant Resume</h3>
		<p>
			Lorem ipsum dolor sit amet consectetur adipisicing elit.
			Placeat beatae quibusdam excepturi quos, consequatur
			ullam autem ad sequi necessitatibus consectetur iure,
			blanditiis deleniti. Quia, maxime! Praesentium repellat
			omnis sequi aperiam!
		</p>
	</section>

	{#if selectedTemplate === "pro"}
		<Pro />
	{/if}
	{#if selectedTemplate === "novice"}
		<Novice />
	{/if}

	<Menu />
</div>
