<script>
	import { cartItems } from '$lib/store/cartStore.js';
	import CartItem from '$lib/components/CartItem.svelte';

	export let items = $cartItems;
</script>

<div class="grid gap-4 md:gap-8">
	{#each $cartItems as item, index (item.id)}
		<CartItem {item} />
		{#if index !== items.length - 1}
			<div class="w-full border-t shadow-md"></div>
		{/if}
	{/each}
</div>
