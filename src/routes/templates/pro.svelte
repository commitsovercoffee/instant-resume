<script>
	import { details } from "../stores/details.js";
	import Atom from "../components/atom.svelte";
</script>

<p>Pro Component</p>

<div class="bg-red-100 flex">
	{#each $details.interests as interest}
		<Atom content={interest} />
	{/each}
</div>
