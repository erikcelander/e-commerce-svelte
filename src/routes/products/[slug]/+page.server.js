import { supabase } from '$lib/supabase';

export const load = async ({ params }) => {
	const { data: product } = await supabase
		.from('products')
		.select('*')
		.eq('id', params.slug)
		.single();

	return {
		product: product
	};
};
