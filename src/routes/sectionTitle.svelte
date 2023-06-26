<script>
	import Atom from './atom.svelte';
	const baseStyle = 'section-heading font-semibold underline underline-offset-4 text-base';
	export let title = 'SECTION TITLE';
</script>

<Atom content={title} {baseStyle} />
