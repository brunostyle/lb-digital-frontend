import create from 'zustand';

interface ITheme {
   isLight: boolean;
   changeTheme: () => void;
}

export const useTheme = create<ITheme>(set => ({
   isLight: true,
   
   changeTheme: () => set(state => ({
      isLight: !state.isLight
   }))
}))