<script>
	import CartQuantity from '$lib/components/CartQuantity.svelte';
</script>

<div class="flex h-16 items-center justify-between border-b shadow-sm">
	<div class="flex w-32 flex-initial flex-row items-center">
		<h3 class=" items-center pl-5 text-center text-2xl">sveltekit</h3>
	</div>

	<nav class="flex w-48 flex-row justify-center gap-6">
		<a class="hover:text-secondary/80 duration-250 transition-colors" href="/"> home </a>
		<a class="hover:text-secondary/80 duration-250 transition-colors" href="/products">
			products
		</a>
	</nav>

	<div class="flex items-center justify-center pr-5 text-end">
		<a class="hover:text-secondary/80 duration-250 transition-colors" href="/cart"> cart </a>
		<div class="absolute mb-6 ml-8 text-sm">
			<CartQuantity />
		</div>
	</div>
</div>
