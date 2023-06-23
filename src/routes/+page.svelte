<script>
	let menuOptions = ['Add', 'Edit', 'Delete'];
	let menu = false;
	let menuPos = { x: 0, y: 0 };

	let skills = ['js', 'html', 'css'];
	let interests = ['linux', 'sketching', 'boating'];

	let selectedParent = '';
	let selectedAction = '';
	let selectedChild = '';

	function handleRightClick(event) {
		menu = true;
		menuPos.x = event.clientX;
		menuPos.y = event.clientY;
	}

	function handleMenuClick() {
		console.log(selectedAction, selectedChild, 'from/to', selectedParent);
		if (selectedParent === 'skills') {
			if (selectedAction === 'Delete') {
				const index = skills.indexOf(selectedChild);
				if (index > -1) {
					// only splice array when item is found
					skills.splice(index, 1); // 2nd parameter means remove one item only
					skills = skills;
				}
			}

			console.log(skills);
		}

		if (selectedParent === 'interests') {
			if (selectedAction === 'Delete') {
				const index = interests.indexOf(selectedChild);
				if (index > -1) {
					// only splice array when item is found
					interests.splice(index, 1); // 2nd parameter means remove one item only
					interests = interests;
				}
			}

			console.log(interests);
		}
	}
</script>

<svelte:window
	on:contextmenu|preventDefault
	on:click={() => {
		menu = false;
	}}
	on:contextmenu|preventDefault={handleRightClick}
/>
{#if menu}
	<ul
		style="top:{menuPos.y}px; left:{menuPos.x}px"
		class="absolute rounded-xl bg-lime-100 prose w-40 z-10"
	>
		{#each menuOptions as opt}
			<li
				class="p-2 hover:bg-lime-300"
				on:click={() => {
					selectedAction = opt;
					handleMenuClick();
				}}
			>
				{opt}
			</li>
		{/each}
	</ul>
{/if}

<div class="flex justify-between">
	<ul class="absolute rounded-xl prose w-40 m-4">
		<h3>Skills</h3>
		{#each skills as skill}
			<li
				bind:innerText={skill}
				contenteditable="true"
				on:contextmenu={() => {
					selectedParent = 'skills';
					selectedChild = skill;
				}}
				class="p-2 bg-sky-300 w-min rounded-xl"
			>
				{skill}
			</li>
		{/each}
	</ul>
</div>
<ul>
	<h3>Interests</h3>
	{#each interests as interest}
		<li
			bind:innerText={interest}
			contenteditable="true"
			on:contextmenu={() => {
				selectedParent = 'interests';
				selectedChild = interest;
			}}
			class="p-2 bg-sky-300 w-min rounded-xl"
		>
			{interest}
		</li>
	{/each}
</ul>
