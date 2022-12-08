import create from 'zustand';
import { IProduct } from "../utils/interfaces"

interface ICart {
   cart: IProduct[];
   total: number;
   numberOfItems: number;
   addProductToCart: (product: IProduct) => void;
   removeProductToCart: (product: IProduct) => void;
}

export const useCart = create<ICart>((set, get) => ({
   cart: [],
   total: 0,
   numberOfItems: 0,

   addProductToCart: product => {
      if(get().cart.find(p => p._id === product._id)) return
      set(state => ({
         cart: [...state.cart, product], 
         total: state.total + product.price,
         numberOfItems: get().numberOfItems + 1
      }))
   },

   removeProductToCart: product => set(state => ({
      cart: state.cart.filter(p => p._id !== product._id),
      total: state.total - product.price,
      numberOfItems: get().numberOfItems - 1
   }))

}))