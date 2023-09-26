import { create } from 'zustand';
import { AuthState } from './types';

export const useAuthStore = create<AuthState>((set) => ({
  isAuth: false,
  setIsAuth: (isAuth: boolean) => set({ isAuth }),
}));
