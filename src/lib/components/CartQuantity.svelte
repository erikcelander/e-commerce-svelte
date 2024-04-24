<script>
	import { onMount } from 'svelte';
	import { cartItems } from '$lib/store/cartStore.js';

	let isClient = false;
	export let totalQuantity = 0;

	onMount(() => {
		isClient = true;
		updateTotalQuantity();
	});

	function updateTotalQuantity() {
		totalQuantity = $cartItems.reduce((sum, item) => sum + item.quantity, 0);
		return totalQuantity;
	}
</script>

{#if isClient}
	<div>{updateTotalQuantity($cartItems)}</div>
{/if}
