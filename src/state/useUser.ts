import create from 'zustand';
import { IAuth } from '../utils/interfaces';

interface IUser {
   isLogged: boolean;
   user?: IAuth;
   login: (user: IAuth) => void;
   logout: () => void;
}

export const useUser = create<IUser>(set => ({
   isLogged: false,
   user: undefined,

   login: user => set({ isLogged: true, user }),
   logout: () => {
      localStorage.removeItem('token')
      set({ isLogged: false, user: undefined })
   }
}))