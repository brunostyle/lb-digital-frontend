import create from 'zustand';
import { IProduct } from "../utils/interfaces"

interface ICart {
   cart: IProduct[];
   subTotal: number;
   addProductToCart: (product: IProduct) => void;
   removeProductToCart: (product: IProduct) => void;
}

export const useCart = create<ICart>((set, get) => ({
   cart: [
      {
         _id: '3',
         title: "Men's Raven Lightweight Zip Up Bomber Jacket",
         description: 'Introducing the Tesla Raven Collection.',
         images: ['1740250-00-A_0_2000.jpg', '1740250-00-A_1.jpg'],
         category: 'portadas',
         price: 130,
         slug: 'men_raven_lightweight_zip_up_bomber_jacket',
         tags: ['shirt'],
      },   
   ],
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