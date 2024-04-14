import { Platform } from 'react-native'
import { create } from 'zustand'
import {Appearance} from 'react-native';

const theme = Appearance.getColorScheme()

const useThemeStore = create<{ theme: 'dark'| 'light' ,toggleTheme:()=>void}>((set) => ({
  theme: theme==='dark'? 'dark': 'light',
  toggleTheme: () => set((state) => ({ theme: state?.theme==='dark'? 'light': 'dark' })),
 }))

 export default useThemeStore