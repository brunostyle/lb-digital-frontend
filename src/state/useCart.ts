import create from 'zustand';
import { IProduct } from '../assets/interfaces';

interface ICart {
   cart: IProduct[];
   subTotal: number;
   addProductToCart: (product: IProduct) => void;
   removeProductToCart: (product: IProduct) => void;
}

export const useCart = create<ICart>((set, get) => ({
   cart: [
      {
         id: 3,
         title: "Men's Raven Lightweight Zip Up Bomber Jacket",
         description:
            "Introducing the Tesla Raven Collection. The Men's Raven Lightweight Zip Up Bomber has a premium, modern silhouette made from a sustainable bamboo cotton blend for versatility in any season. The hoodie features subtle thermoplastic polyurethane Tesla logos on the left chest and below the back collar, a concealed chest pocket with custom matte zipper pulls and a french terry interior. Made from 70% bamboo and 30% cotton.",
         images: [{ original: 'products/1740250-00-A_0_2000.jpg' }, { original: 'products/1740250-00-A_1.jpg' }],
         type: 'shirts',
         price: 130,
         inStock: 10,
         slug: 'men_raven_lightweight_zip_up_bomber_jacket',
         tags: ['shirt'],
         gender: 'men',
      },   
   ],
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