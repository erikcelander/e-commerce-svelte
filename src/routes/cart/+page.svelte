<script>
	import CartList from '$lib/components/CartList.svelte';
	import { cartItems } from '$lib/store/cartStore.js';
</script>

<main class="flex min-h-[calc(100vh-64px)]">
	<div class="mx-auto flex max-w-6xl flex-col items-start gap-4 p-4 md:flex-row md:gap-8">
		<div class="mt-6 grid w-full gap-4">
			<div class=" text-card-background bg-white rounded-lg border shadow-sm" data-v0-t="card">
				<div class="flex flex-col space-y-1.5 p-6 md:flex-row md:items-center md:gap-4">
					<div class="flex w-full flex-row justify-between">
						<h3 class="whitespace-nowrap text-2xl font-semibold leading-none tracking-tight">
							Shopping Cart
						</h3>
						<p class="text-gray-600 text-sm">
							You have {$cartItems.reduce((sum, item) => sum + item.quantity, 0)} items in your cart
						</p>
					</div>
				</div>
				<div class="p-6">
					<CartList />
				</div>
				<div class="flex flex-col gap-4 p-6 md:flex-row md:items-center md:justify-between">
					<a class="hover:text-secondary/80 duration-250 transition-colors" href="/products">
						<button
							class="ring-offset-background focus-visible:ring-ring border- bg-foreground hover:bg-accent hover:text-accent-foreground mt-8 inline-flex h-11 items-center justify-center whitespace-nowrap rounded-md border px-6 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="24"
								height="24"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
								class="mr-2 h-4 w-4"
							>
								<path d="m15 18-6-6 6-6"></path>
							</svg>
							Continue shopping
						</button>
					</a>
					<div class="flex flex-col items-end">
						<p class="mb-1 text-lg">
							Total SEK {$cartItems
								.reduce((total, item) => total + item.price * item.quantity, 0)
								.toFixed(2)}
						</p>
						<button
							class="ring-offset-background focus-visible:ring-ring bg-primary text-primary-foreground hover:bg-primary/90 mt-2 inline-flex h-11 items-center justify-center whitespace-nowrap rounded-md px-6 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 md:ml-4 md:mt-0"
						>
							Proceed to checkout
						</button>
					</div>
				</div>
			</div>
		</div>
	</div>
</main>
