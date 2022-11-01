import create from 'zustand';
import { IProduct } from '../assets/interfaces';
import { products } from '../assets/products';

interface IProducts {
   products: IProduct[]
}

export const useProducts = create<IProducts>((set, get) => ({
   products
}))