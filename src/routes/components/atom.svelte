<script>
	import { menu } from "../stores/menu.js";

	// Atom returns text components which are selectable and editable.
	const base =
		"hover:border-indigo-500 focus:border-indigo-500 border-2 border-white [&[contenteditable]]:active:border-2 [&[contenteditable]]:focus:border-2 [&[contenteditable]]:focus:outline-none break-words";

	// vars for state management
	let selected = false;
	let editable = false;

	$: selected = $menu.visible;

	// vars for component content
	export let content = "";
	export let parent = "";
	export let style = "";

	let pos;
</script>

<div
	role="button"
	tabindex="0"
	bind:this={pos}
	on:keydown={() => {}}
	on:click|stopPropagation={() => {
		if (editable) {
		} else {
			selected = true;
			$menu.pos = pos.getBoundingClientRect();
			$menu.visible = true;
			$menu.parent = parent;
			$menu.content = content;
		}
	}}
	on:dblclick={() => {
		editable = true;
		$menu.visible = false;
	}}
	on:focusout={() => {
		editable = false;
	}}
	contenteditable={editable && !$menu.visible}
	class={`${style} ${base} ${
		editable ? "cursor-text" : "cursor-default select-none"
	}`}
>
	{content}
</div>
