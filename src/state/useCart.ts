import create from 'zustand';
import { IProduct } from "../utils/interfaces"

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
      if(get().cart.find(p => p._id === product._id)) return
      set(state => ({
         cart: [...state.cart, product], 
         subTotal: state.subTotal + product.price
      }))
   },

   removeProductToCart: product => set(state => ({
      cart: state.cart.filter(p => p._id !== product._id),
      subTotal: state.subTotal - product.price
   }))

}))