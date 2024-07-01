import { ChipProps } from "@nextui-org/react";

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

export const categories: Record<string, ChipProps["color"]> = {
	cards: 'warning',
	covers: 'danger',
	logos: 'secondary',
 }