import { create } from 'zustand';

import type { LocalStore } from './types';

export const useLocalStore = create<LocalStore>(set => ({
  theme: 'light',
  user: null,
  setTheme: (theme) => {
    set({theme})
  },
  login: () => new Promise<void>(() => {})
}))
