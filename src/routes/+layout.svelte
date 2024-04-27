<script>
	import '../app.css';
	import Nav from '$lib/components/Nav.svelte';
</script>

<svelte:head>
	<title>Svelte e-commerce</title>
	<meta name="description" content="E-commerce made with SvelteKit" />
	<meta property="og:title" content="Svelte e-commerce" />
	<meta property="og:description" content="E-commerce made with SvelteKit" />
</svelte:head>

<Nav />

<slot />

<style lang="postcss">
	:global(body) {
		@apply bg-gray-200;
		@apply text-black;
	}
</style>
