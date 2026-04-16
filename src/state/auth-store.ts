import { create } from 'zustand';

import type { AuthStore } from './types';

export const useLocalStore = create<AuthStore>(set => ({
  user: null,
  authData: null,
  login: () => new Promise<void>(() => {}),
  logout: () => new Promise<void>(() => {})
}))
