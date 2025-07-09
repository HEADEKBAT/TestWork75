import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface User {
  firstName: string;
  lastName: string;
  email: string;
  token: string;
}

interface AuthState {
  user: User | null;
  login: (user: User) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    set => ({
      user: null,
      login: user => set({ user }),
      logout: () => set({ user: null }),
    }),
    {
      name: 'auth-storage',
    },
  ),
);
