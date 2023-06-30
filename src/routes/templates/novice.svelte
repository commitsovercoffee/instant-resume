<script>
	import { details } from "../stores/details.js";
</script>

<p>Novice Component</p>

<div class="bg-green-100">
	{#each $details.interests as interest}
		<li>{interest}</li>
	{/each}
</div>
