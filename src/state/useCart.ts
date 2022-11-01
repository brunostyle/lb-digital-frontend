import create from 'zustand';
import { IProduct } from '../assets/interfaces';

interface ICart {
   cart: IProduct[];
   subTotal: number;
   addProductToCart: (product: IProduct) => void;
   removeProductToCart: (product: IProduct) => void;
}

export const useCart = create<ICart>((set, get) => ({
   cart: [],
   subTotal: 0,

   addProductToCart: product => {
      if(get().cart.find(p => p.id === product.id)) return
      set(state => ({
         cart: [...state.cart, product], 
         subTotal: state.subTotal + product.price
      }))
   },

   removeProductToCart: product => set(state => ({
      cart: state.cart.filter(p => p.id !== product.id),
      subTotal: state.subTotal - product.price
   }))

}))