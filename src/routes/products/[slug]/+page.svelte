<script>
	// import { addToCart } from '$lib/store/cartStore.js';
	import AddToCart from '$lib/components/AddToCart.svelte';
	export let data;
	export let product = data.product;

	// const handleOnClick = () => {
	// 	addToCart(product);
	// };
</script>

<div class="flex w-full flex-col items-center justify-center">
	<div class="mx-auto mt-24 flex max-w-3xl gap-12">
		<div class="mb-6">
			<img src={product.image} alt={product.name} class="h-full w-96 rounded-t-lg object-cover" />
		</div>
		<div class="flex h-[450px] w-96 flex-col justify-evenly gap-6 text-center">
			<div>
				<h1 class="mb-2 text-3xl font-bold">{product.name}</h1>
				<p class="mb-4">{product.description}</p>
			</div>
			<div>
				<span class="mb-4 block text-4xl font-bold">
					{product.price}
					{product.currency}
				</span>
				<AddToCart {product} />
			</div>
		</div>
	</div>
</div>
