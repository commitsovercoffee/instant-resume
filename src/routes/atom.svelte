<script>
	export let editable = '';
	export let selectedChild = '';
	export let content = '';

	export let baseStyle = '';
	let editStyle =
		'hover:border-indigo-500 focus:border-indigo-500 border-2 border-white [&[contenteditable]]:active:border-2 [&[contenteditable]]:focus:border-2 [&[contenteditable]]:focus:outline-none ';
</script>

<svelte:window
	on:contextmenu|preventDefault
	on:click={() => {
		selectedChild = '';
		editable = '';
	}}
/>

<div
	role="button"
	tabindex="0"
	on:keydown|preventDefault|once={() => {
		editable = content;
	}}
	on:dblclick|preventDefault|stopPropagation={() => {
		editable = content;
	}}
	on:click|preventDefault|stopPropagation={() => {
		selectedChild = content;
	}}
	contenteditable={editable === content}
	class={`${baseStyle} ${editStyle} ${
		editable === content ? 'cursor-text' : 'cursor-default select-none'
	}`}
>
	{content}
</div>
