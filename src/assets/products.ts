import { IProduct, TValidCategory } from '../utils/interfaces';

export const products: IProduct[] = [
	{
		_id: '1',
		title: "Men's Chill Crew Neck Sweatshirt",
		description: 'Introducing the Tesla Chill Collection',
		images: ['1740176-00-A_0_2000.jpg', '1740176-00-A_1.jpg'],
		category: 'portadas',
		price: 75,
		slug: 'mens_chill_crew_neck_sweatshirt',
		tags: ['sweatshirt'],
	},
	{
		_id: '2',
		title: "Men's Quilted Shirt Jacket",
		description: "Men's Quilted Shirt Jacket features a uniquely fit",
		images: ['1740507-00-A_0_2000.jpg', '1740507-00-A_1.jpg'],
		category: 'portadas',
		price: 200,
		slug: 'men_quilted_shirt_jacket',
		tags: ['jacket'],
	},
	{
		_id: '3',
		title: "Men's Raven Lightweight Zip Up Bomber Jacket",
		description: 'Introducing the Tesla Raven Collection.',
		images: ['1740250-00-A_0_2000.jpg', '1740250-00-A_1.jpg'],
		category: 'portadas',
		price: 130,
		slug: 'men_raven_lightweight_zip_up_bomber_jacket',
		tags: ['shirt'],
	},
	{
		_id: '4',
		title: "Men's Turbine Long Sleeve Tee",
		description: 'Introducing the Tesla Turbine Collection.',
		images: ['1740280-00-A_0_2000.jpg'],
		category: 'tarjetas',
		price: 45,
		slug: 'men_turbine_long_sleeve_tee',
		tags: ['shirt'],
	},
	{
		_id: '5',
		title: "Men's Turbine Short Sleeve Tee",
		description: 'Introducing the Tesla Turbine Collection.',
		images: ['1741416-00-A_0_2000.jpg', '1741416-00-A_1.jpg'],
		category: 'tarjetas',
		price: 40,
		slug: 'men_turbine_short_sleeve_tee',
		tags: ['shirt'],
	},
	{
		_id: '6',
		description: "The Women's Cropped Puffer Jacket features a uniquely cropped silhouette for the perfect.",
		images: ['1740535-00-A_0_2000.jpg', '1740535-00-A_1.jpg'],
		price: 225,
		slug: 'women_cropped_puffer_jacket',
		category: 'tarjetas',
		tags: ['hoodie'],
		title: "Women's Cropped Puffer Jacket",
	},
	{
		_id: '7',
		description: "Introducing the Tesla Chill Collection. The Women's Chill Half Zip Cropped Hoodie has a premium.",
		images: ['1740226-00-A_0_2000.jpg', '1740226-00-A_1.jpg'],
		price: 130,
		slug: 'women_chill_half_zip_cropped_hoodie',
		category: 'logos',
		tags: ['hoodie'],
		title: "Women's Chill Half Zip Cropped Hoodie",
	},
	{
		_id: '8',
		description: "Introducing the Tesla Raven Collection. The Women's Raven Slouchy Crew Sweatshirt has a premium.",
		images: ['1740260-00-A_0_2000.jpg', '1740260-00-A_1.jpg'],
		price: 110,
		slug: 'women_raven_slouchy_crew_sweatshirt',
		category: 'logos',
		tags: ['hoodie'],
		title: "Women's Raven Slouchy Crew Sweatshirt",
	},
	{
		_id: '9',
		description: 'Introducing the Tesla Turbine Collection. Designed for style, comfort and everyday lifestyle',
		images: ['1740290-00-A_0_2000.jpg'],
		price: 45,
		slug: 'women_turbine_cropped_long_sleeve_tee',
		category: 'logos',
		tags: ['shirt'],
		title: "Women's Turbine Cropped Long Sleeve Tee",
	},
	{
		_id: '10',
		description: 'ntroducing the Tesla Turbine Collection. Designed for style, comfort and everyday lifestyle.',
		images: ['1741441-00-A_0_2000.jpg'],
		price: 40,
		slug: 'women_turbine_cropped_short_sleeve_tee',
		category: 'logos',
		tags: ['shirt'],
		title: "Women's Turbine Cropped Short Sleeve Tee",
	},
];

export const getProductBySlug = (slug: string) => {
	return products.find(product => product.slug === slug);
};

export const filter = (category: TValidCategory) => {
	return products.filter(product => product.category === category);
};

export const findProduct = (query: string) => {
	return products.filter(product => product.category === query);
};
