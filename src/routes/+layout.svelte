<script>
	import '../app.css';
	import Nav from '$lib/components/Nav.svelte';
</script>

<Nav />

<slot />

<style lang="postcss">
	:global(body) {
		@apply bg-gray-200;
		@apply text-black;
	}
</style>
