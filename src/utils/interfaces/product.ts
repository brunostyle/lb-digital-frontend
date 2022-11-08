export type TValidCategory = 'tarjetas' | 'portadas' | 'logos';

export interface IProduct {
	_id: string;
	// createdAt: string;
	// updatedAt: string;

	title: string;
	slug: string;
	description: string;
	images: string[];
	price: number;
	tags: string[];
	category: TValidCategory;
}

export interface ISeedProduct {
	title: string;
	slug: string;
	description: string;
	images: string[];
	price: number;
	tags: string[];
	category: TValidCategory;
}

export interface IDashboard {
   _id: string;
   number: number;
   text: string;
   icon: JSX.Element;
}
