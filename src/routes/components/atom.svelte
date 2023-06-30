<script>
	// Atom return text components which are selectable and editable.
	let prop = {
		style: "hover:border-indigo-500 focus:border-indigo-500 border-2 border-white [&[contenteditable]]:active:border-2 [&[contenteditable]]:focus:border-2 [&[contenteditable]]:focus:outline-none break-words",
		selected: false,
		editable: false,
	};

	export let content = "";
	export let style = "";
</script>

<svelte:window
	on:contextmenu|preventDefault
	on:click={() => {
		prop.selected = false;
		prop.editable = false;
	}}
/>
<div
	role="button"
	tabindex="0"
	on:keydown|once={() => {
		prop.editable = true;
	}}
	on:click|preventDefault|stopPropagation={() => {
		prop.selected = true;
		prop.editable = false;
	}}
	on:dblclick|preventDefault|stopPropagation={() => {
		prop.editable = true;
	}}
	contenteditable={prop.editable}
	class={`${style} ${prop.style} ${
		prop.editable ? "cursor-text" : "cursor-default select-none"
	}`}
>
	{content}
</div>
