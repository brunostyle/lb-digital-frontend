export type TValidCategory = 'tarjetas' | 'portadas' | 'logos';

interface IImage {
	original: string;
}

export interface IProduct {
	_id: string;
	description: string;
	// images: IImage[];
	images: string[];
	price: number;
	slug: string;
	tags: string[];
	title: string;
	category: TValidCategory;
	// createdAt: string;
	// updatedAt: string;
}

export interface ISeedProduct {
	title: string;
	description: string;
	images: string[];
	price: number;
	slug: string;
	tags: string[];
	category: TValidCategory;
}

export interface IDashboard {
   _id: string;
   number: number;
   text: string;
   icon: JSX.Element;
}
