import { supabase } from '$lib/supabase';

export async function load() {
	const { data: products } = await supabase.from('products').select('*');

	return {
		products
	};
}
