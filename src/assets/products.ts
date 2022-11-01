import { IProduct, TValidGendar } from './interfaces';

export const products: IProduct[] = [
	{
		id: 1,
		title: "Men's Chill Crew Neck Sweatshirt",
		description:
			"Introducing the Tesla Chill Collection. The Men's Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
		images: [{ original: 'products/1740176-00-A_0_2000.jpg' }, { original: 'products/1740176-00-A_1.jpg' }],
		type: 'shirts',
		price: 75,
		inStock: 7,
		slug: 'mens_chill_crew_neck_sweatshirt',
		tags: ['sweatshirt'],
		gender: 'men',
	},
	{
		id: 2,
		title: "Men's Quilted Shirt Jacket",
		description:
			"Men's Quilted Shirt Jacket features a uniquely fit, quilted design for warmth and mobility in cold weather seasons. With an overall street-smart aesthetic, the jacket features subtle silicone injected Tesla logos below the back collar and on the right sleeve, as well as custom matte metal zipper pulls. Made from 87% nylon and 13% polyurethane.",
		images: [{ original: 'products/1740507-00-A_0_2000.jpg' }, { original: 'products/1740507-00-A_1.jpg' }],
		type: 'shirts',
		price: 200,
		inStock: 5,
		slug: 'men_quilted_shirt_jacket',
		tags: ['jacket'],
		gender: 'men',
	},
	{
		id: 3,
		title: "Men's Raven Lightweight Zip Up Bomber Jacket",
		description:
			"Introducing the Tesla Raven Collection. The Men's Raven Lightweight Zip Up Bomber has a premium, modern silhouette made from a sustainable bamboo cotton blend for versatility in any season. The hoodie features subtle thermoplastic polyurethane Tesla logos on the left chest and below the back collar, a concealed chest pocket with custom matte zipper pulls and a french terry interior. Made from 70% bamboo and 30% cotton.",
		images: [{ original: 'products/1740250-00-A_0_2000.jpg' }, { original: 'products/1740250-00-A_1.jpg' }],
		type: 'shirts',
		price: 130,
		inStock: 10,
		slug: 'men_raven_lightweight_zip_up_bomber_jacket',
		tags: ['shirt'],
		gender: 'men',
	},
	{
		id: 4,
		title: "Men's Turbine Long Sleeve Tee",
		description: "Introducing the Tesla Turbine Collection. Designed for style, comfort and everyday lifestyle, the Men's Turbine Long Sleeve Tee features a subtle, water-based T logo on the left chest and our Tesla wordmark below the back collar. The lightweight material is double-dyed, creating a soft, casual style for ideal wear in any season. Made from 50% cotton and 50% polyester.",
		images: [
			{ original: 'products/1740280-00-A_0_2000.jpg'},
			{ original: 'products/1740280-00-A_1.jpg' }
		],
		type: 'shirts',
		price: 45,
		inStock: 50,
		slug: 'men_turbine_long_sleeve_tee',
		tags: ['shirt'],
		gender: 'men',
	},
	{
		id: 5,
		title: "Men's Turbine Short Sleeve Tee",
		description: "Introducing the Tesla Turbine Collection. Designed for style, comfort and everyday lifestyle, the Men's Turbine Short Sleeve Tee features a subtle, water-based Tesla wordmark across the chest and our T logo below the back collar. The lightweight material is double-dyed, creating a soft, casual style for ideal wear in any season. Made from 50% cotton and 50% polyester.",
		images: [{ original: 'products/1741416-00-A_0_2000.jpg'}, { original: 'products/1741416-00-A_1.jpg' }],
		type: 'shirts',
		price: 40,
		inStock: 50,
		slug: 'men_turbine_short_sleeve_tee',
		tags: ['shirt'],
		gender: 'men',
	},
	{
		id: 6,
		description:
			"The Women's Cropped Puffer Jacket features a uniquely cropped silhouette for the perfect, modern style while on the go during the cozy season ahead. The puffer features subtle silicone injected Tesla logos below the back collar and on the right sleeve, custom matte metal zipper pulls and a soft, fleece lined collar. Made from 87% nylon and 13% polyurethane.",
		images: [{ original: 'products/1740535-00-A_0_2000.jpg' }, { original: 'products/1740535-00-A_1.jpg' }],
		inStock: 85,
		price: 225,
		slug: 'women_cropped_puffer_jacket',
		type: 'hoodies',
		tags: ['hoodie'],
		title: "Women's Cropped Puffer Jacket",
		gender: 'women',
	},
	{
		id: 7,
		description:
			"Introducing the Tesla Chill Collection. The Women's Chill Half Zip Cropped Hoodie has a premium, soft fleece exterior and cropped silhouette for comfort in everyday lifestyle. The hoodie features an elastic hem that gathers at the waist, subtle thermoplastic polyurethane Tesla logos along the hood and on the sleeve, a double layer single seam hood and a custom ring zipper pull. Made from 60% cotton and 40% recycled polyester.",
		images: [{ original: 'products/1740226-00-A_0_2000.jpg' }, { original: 'products/1740226-00-A_1.jpg' }],
		inStock: 10,
		price: 130,
		slug: 'women_chill_half_zip_cropped_hoodie',
		type: 'hoodies',
		tags: ['hoodie'],
		title: "Women's Chill Half Zip Cropped Hoodie",
		gender: 'women',
	},
	{
		id: 8,
		description:
			"Introducing the Tesla Raven Collection. The Women's Raven Slouchy Crew Sweatshirt has a premium, relaxed silhouette made from a sustainable bamboo cotton blend. The slouchy crew features a subtle thermoplastic polyurethane Tesla wordmark on the left sleeve and a french terry interior for a cozy look and feel in every season. Pair it with your Raven Joggers or favorite on the go fit. Made from 70% bamboo and 30% cotton.",
		images: [{ original: 'products/1740260-00-A_0_2000.jpg' }, { original: 'products/1740260-00-A_1.jpg' }],
		inStock: 9,
		price: 110,
		slug: 'women_raven_slouchy_crew_sweatshirt',
		type: 'hoodies',
		tags: ['hoodie'],
		title: "Women's Raven Slouchy Crew Sweatshirt",
		gender: 'women',
	},
	{
		id: 9,
		description:
			"Introducing the Tesla Turbine Collection. Designed for style, comfort and everyday lifestyle, the Women's Turbine Cropped Long Sleeve Tee features a subtle, water-based Tesla wordmark across the chest and our T logo below the back collar. The lightweight material is double-dyed, creating a soft, casual style with a cropped silhouette. Made from 50% cotton and 50%",
		images: [{ original: 'products/1740290-00-A_0_2000.jpg' }],
		inStock: 10,
		price: 45,
		slug: 'women_turbine_cropped_long_sleeve_tee',
		type: 'shirts',
		tags: ['shirt'],
		title: "Women's Turbine Cropped Long Sleeve Tee",
		gender: 'women',
	},
	{
		id: 10,
		description:
			"ntroducing the Tesla Turbine Collection. Designed for style, comfort and everyday lifestyle, the Women's Turbine Cropped Short Sleeve Tee features a subtle, water-based Tesla wordmark across the chest and our T logo below the back collar. The lightweight material is double-dyed, creating a soft, casual style with a cropped silhouette. Made from 50% cotton and 50% polyester.",
		images: [{ original: 'products/1741441-00-A_0_2000.jpg' }],
		inStock: 0,
		price: 40,
		slug: 'women_turbine_cropped_short_sleeve_tee',
		type: 'shirts',
		tags: ['shirt'],
		title: "Women's Turbine Cropped Short Sleeve Tee",
		gender: 'women',
	},
];

export const getProductBySlug = (slug: string) => {
	return products.find(product => product.slug === slug);
};

export const filter = (category: TValidGendar) => {
	return products.filter(product => product.gender === category);
};

export const findProduct = (query: string) => {
	return products.filter(product => product.gender === query);
};
