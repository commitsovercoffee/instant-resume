<script>
	export let editable = false;
	export let education = {};
</script>

<!-- education -->
<section>
	{#if editable}
		<p class="font-bold underline underline-offset-4">Education</p>
		<div class="flex flex-col justify-between text-xs mb-2">
			<p class="p-0 m-0 font-semibold" bind:textContent={education.degree} contenteditable="true" />

			<div class="flex justify-between">
				<p
					class="p-0 m-0 font-light"
					bind:textContent={education.institute}
					contenteditable="true"
				/>
				<p class="p-0 m-0 italic" bind:textContent={education.duration} contenteditable="true" />
			</div>
		</div>
	{:else}
		<p class="font-bold underline underline-offset-4">Education</p>
		<div class="flex flex-col justify-between text-xs mb-2">
			<p class="p-0 m-0 font-semibold" bind:textContent={education.degree} contenteditable="true" />

			<div class="flex justify-between">
				<p
					class="p-0 m-0 font-light"
					bind:textContent={education.institute}
					contenteditable="true"
				/>
				<p class="p-0 m-0 italic" bind:textContent={education.duration} contenteditable="true" />
			</div>
		</div>
	{/if}
</section>
