export type TValidCategory = 'cards' | 'covers' | 'logos';

export interface IProduct {
	_id?: string;
	createdAt?: string;
	updatedAt?: string;
	title: string;
	description: string;
	images: string[];
	price: number;
	slug: string;
	tags: string[];
	category: TValidCategory;
}
