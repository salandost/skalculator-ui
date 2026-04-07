import { create } from 'zustand';

import type { User, Product, Category, Order, DataStore } from './types';

const apiUrl = import.meta.env.VITE_API_URL;

const createDataStore = <T>(endpoint: string) =>
  create<DataStore<T>>((set) => ({
    data: [],
    item: null,
    isLoading: false,
    error: null,

    getData: async () => {
      set({ isLoading: true, error: null });
      try {
        const response = await fetch(`${apiUrl}${endpoint}`);
        if (!response.ok) throw new Error(`Failed to fetch ${endpoint}: ${response.status}`);
        const { data } = await response.json();
        set({ data, isLoading: false });
      } catch (err: any) {
        set({ error: err.message, isLoading: false });
      }
    },

    getItem: async (id) => {
      set({ isLoading: true, error: null });
      try {
        const response = await fetch(`${apiUrl}${endpoint}/${id}`);
        if (!response.ok) throw new Error(`Failed to fetch ${endpoint} item: ${response.status}`);
        const { data } = await response.json();
        set({ item: data, isLoading: false });
      } catch (err: any) {
        set({ error: err.message, isLoading: false });
      }
    },

    createItem: async (item) => {
      set({ isLoading: true, error: null });
      try {
        const response = await fetch(`${apiUrl}${endpoint}`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(item),
        });
        if (!response.ok) throw new Error(`Failed to create ${endpoint}: ${response.status}`);
        const data = await response.json();
        set(() => ({ item: data, isLoading: false }));
      } catch (err: any) {
        set({ error: err.message, isLoading: false });
      }
    },

    updateItem: async (id, updates) => {
      set({ isLoading: true, error: null });
      try {
        const response = await fetch(`${apiUrl}${endpoint}/${id}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(updates),
        });
        if (!response.ok) throw new Error(`Failed to update ${endpoint}: ${response.status}`);
        const data = await response.json();
        set(() => ({
          item: data,
          isLoading: false,
        }));
      } catch (err: any) {
        set({ error: err.message, isLoading: false });
      }
    },

    deleteItem: async (id) => {
      set({ isLoading: true, error: null });
      try {
        const response = await fetch(`${apiUrl}${endpoint}/${id}`, {
          method: 'DELETE',
        });
        if (!response.ok) throw new Error(`Failed to delete ${endpoint}: ${response.status}`);
        set(() => ({ isLoading: false }));
      } catch (err: any) {
        set({ error: err.message, isLoading: false });
      }
    },
  }));

export const useCategoryStore = createDataStore<Category>('category');
export const useUserStore = createDataStore<User>('user');
export const useProductStore = createDataStore<Product>('product');
export const useOrderStore = createDataStore<Order>('order')
