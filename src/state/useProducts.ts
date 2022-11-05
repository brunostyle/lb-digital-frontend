import create from 'zustand';
import { products } from '../assets/products';
import { IProduct } from "../utils/interfaces"

interface IProducts {
   products: IProduct[]
}

export const useProducts = create<IProducts>((set, get) => ({
   products,
}))