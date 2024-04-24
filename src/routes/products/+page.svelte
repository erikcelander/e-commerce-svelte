<script>
	export let data;
	export let products = data.products;
</script>

<div class="flex w-full items-center justify-center p-12">
	<div class="grid grid-cols-1 gap-10 md:grid-cols-4">
		{#each products as product}
			<a href="/products/{product.id}" class="flex outline-none focus:outline-none">
				<div
					class="bg-white text-card-background w-64 transform rounded-lg border shadow-sm transition duration-300 ease-in-out hover:-translate-y-1 hover:shadow-lg"
					data-v0-t="card"
				>
					<img
						src={product.image}
						alt={product.name}
						class="h-64 w-full rounded-t-lg object-cover"
					/>
					<div class="p-6">
						<h2 class="text-lg font-semibold">{product.name}</h2>
						<p class="text-gray-500">{product.description}</p>
						<div class="mt-4 flex items-center justify-between">
							<span class="text-xl font-bold">{product.price} {product.currency}</span>
							<div
								class="h-4 w-4 rounded-full"
								class:bg-green-500={product.stock > 0}
								class:bg-red-500={product.stock <= 0}
							></div>
						</div>
					</div>
				</div>
			</a>
		{/each}
	</div>
</div>
