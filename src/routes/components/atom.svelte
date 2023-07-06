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
	export let items = Array();
	export let index = -1;

	// type of component :
	export let type = "field";
	// field : editable with menu
	// block : editable without menu
	// section : non-editable with menu

	let pos;
</script>

{#if type === "block"}
	<div
		role="button"
		tabindex="0"
		on:keydown={() => {}}
		on:click|stopPropagation|preventDefault={() => {
			{
				selected = true;
				$menu.visible = false;
			}
		}}
		on:dblclick={() => {
			editable = true;
		}}
		on:focusout={() => {
			editable = false;
		}}
		contenteditable={editable}
		class={`${style} ${base} ${
			editable ? "cursor-text" : "cursor-default select-none"
		}`}
	>
		{content}
	</div>
{:else if type === "section"}
	<div
		role="button"
		tabindex="0"
		bind:this={pos}
		on:keydown={() => {}}
		on:click|stopPropagation={() => {
			selected = true;
			$menu.pos = pos.getBoundingClientRect();
			$menu.visible = true;
			$menu.parent = parent;
			$menu.content = content;
			$menu.items = items;
			$menu.index = index;
		}}
		class={`${style} ${base} ${
			editable ? "cursor-text" : "cursor-default select-none"
		}`}
	>
		<slot />
	</div>
{:else if type === "field"}
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
				$menu.items = [];
				$menu.index = index;
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
{/if}
