<script>
	import { details } from "../stores/details.js";
	import Atom from "../components/atom.svelte";
</script>

<p>Pro Component</p>

<div class="bg-green-100 flex">
	{#each $details.skills as skill}
		<Atom content={skill} />
	{/each}
</div>
