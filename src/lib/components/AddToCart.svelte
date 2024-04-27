<script>
	import { addToCart } from '$lib/store/cartStore.js';
	export const ssr = false;
	export let product = {};
	const handleOnClick = () => {
		addToCart(product);
	};
</script>

<button
	on:click={handleOnClick}
	class="text-primary-foreground bg-foreground inline-flex h-10 w-72 items-center justify-center rounded-xl px-4 py-2 text-sm font-medium transition-colors hover:cursor-pointer hover:bg-white/80"
>
	Add to cart
</button>
