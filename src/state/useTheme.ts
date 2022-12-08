import create from 'zustand';

interface ITheme {
   isLight: boolean;
   changeTheme: () => void;
}

export const useTheme = create<ITheme>(set => ({
   isLight: false,
   
   changeTheme: () => set(state => ({
      isLight: !state.isLight
   }))
}))