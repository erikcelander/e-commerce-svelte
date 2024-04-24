<!-- CartItem.svelte -->
<script>
	import { updateQuantity } from '$lib/store/cartStore.js';

	export let item = {};
</script>

<div class="flex items-center md:gap-8">
	<img src={item.image} alt={item.name} width="48" height="48" class="rounded-lg" />
	<div class="flex w-full flex-row items-center justify-between text-center">
		<h1 class="text-lg font-semibold sm:text-xl md:text-2xl">
			{item.name}
		</h1>
		<div class="space-between flex h-full w-fit flex-row">
			<div class="mr-5 flex flex-col items-center">
				<div class="text-md flex items-center">
					<button
						on:click={() => {
							updateQuantity(item.id, item.quantity - 1);
						}}
						class="mr-2"
					>
						-
					</button>
					<span class="text-center text-sm">{item.quantity}</span>
					<button
						on:click={() => {
							updateQuantity(item.id, item.quantity + 1);
						}}
						class="ml-2"
					>
						+
					</button>
				</div>
			</div>
			<p class="text-sm leading-6">
				<span class="font-semibold">
					{item.price}
					{item.currency}
				</span>
			</p>
		</div>
	</div>
	<!-- Remove button -->
</div>
