import { persistentAtom } from '@nanostores/persistent';

export const cartItems = persistentAtom('cart', [], {
	encode: JSON.stringify,
	decode: JSON.parse
});

export function addToCart(product) {
	const currentItems = cartItems.get();
	const existingItemIndex = currentItems.findIndex((item) => item.id === product.id);
	if (existingItemIndex !== -1) {
		const updatedItems = currentItems.slice();
		updatedItems[existingItemIndex] = {
			...updatedItems[existingItemIndex],
			quantity: updatedItems[existingItemIndex].quantity + 1
		};
		cartItems.set(updatedItems);
	} else {
		cartItems.set([...currentItems, { ...product, quantity: 1 }]);
	}
}

export function removeFromCart(productId) {
	const currentItems = cartItems.get();
	const updatedItems = currentItems.filter((item) => item.id !== productId);
	cartItems.set(updatedItems);
}

export function updateQuantity(productId, quantity) {
	if (quantity === 0) {
		return removeFromCart(productId);
	}

	const currentItems = cartItems.get();
	const updatedItems = currentItems.map((item) =>
		item.id === productId ? { ...item, quantity: Math.max(quantity, 0) } : item
	);
	cartItems.set(updatedItems);
}
