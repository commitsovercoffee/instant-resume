<script>
	import { createEventDispatcher } from 'svelte';
	import Page from './+page.svelte';
	const dispatch = createEventDispatcher();

	export let editable = '';
	export let selectedChild = '';
	export let content = '';
	let hidden = false;

	export let baseStyle = '';
	let editStyle =
		'hover:border-indigo-500 focus:border-indigo-500 border-2 border-white [&[contenteditable]]:active:border-2 [&[contenteditable]]:focus:border-2 [&[contenteditable]]:focus:outline-none break-words';

	let current;

	function handleMenuVisibility() {
		console.log(current.getBoundingClientRect());
		dispatch('menuStateChange', {
			status: hidden,
			rect: current.getBoundingClientRect()
		});
	}
</script>

<svelte:window
	on:contextmenu|preventDefault
	on:click={() => {
		selectedChild = '';
		editable = '';
		hidden = false;
		handleMenuVisibility();
	}}
/>

<div
	bind:this={current}
	role="button"
	tabindex="0"
	on:keydown|once={() => {
		editable = content;
	}}
	on:dblclick|preventDefault|stopPropagation={() => {
		editable = content;
		hidden = false;
		handleMenuVisibility();
	}}
	on:click|preventDefault|stopPropagation={() => {
		selectedChild = content;
		hidden = true;
		handleMenuVisibility();
	}}
	contenteditable={editable === content}
	class={`${baseStyle} ${editStyle} ${
		editable === content ? 'cursor-text' : 'cursor-default select-none'
	}`}
>
	{content}
</div>
