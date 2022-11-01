export type TValidTypes = 'shirts' | 'pants' | 'hoodies' | 'hats';
export type TValidGendar = 'men' | 'women' | 'kid' | 'unisex';

interface IImage {
	original: string;
}

export interface IProduct {
	id: number;
	description: string;
	images: IImage[];
	inStock: number;
	price: number;
	slug: string;
	tags: string[];
	title: string;
	type: TValidTypes;
	gender: TValidGendar;
}

export interface IOrderHistory {
   id: string;
   name: string;
   paid: boolean;
   createdAt: Date;
}

export interface IDashboard {
   id: string;
   number: number;
   text: string;
   icon: JSX.Element;
}

type TValidRoles = 'admin' | 'client';
export interface IUser {
   id: string;
   name: string;
   email: string;
   role: TValidRoles;
   avatar?: string;
}