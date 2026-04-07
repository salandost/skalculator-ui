export interface DataStore<T> {
  data: T[];
  item: T | null;
  isLoading: boolean;
  error: string | null;
  getData: () => Promise<void>;
  getItem?: (id: number) => Promise<void>;
  createItem?: (item: Partial<T>) => Promise<void>;
  updateItem?: (id: number, updates: Partial<T>) => Promise<void>;
  deleteItem?: (id: number) => Promise<void>;
}

export interface User {
  id: number;
  name: string;
  username: string;
  role: 'admin' | 'manager' | 'cashier';
}

export interface Product {
  id: number;
  name: string;
  description: string;
  image: string;
  price: number;
  sku: number;
  categories: Category[];
  created_at: string;
  updated_at: string | null;
  deleted_at: string | null;
}

export interface Category {
  id: number;
  name: string;
  created_at: string;
  updated_at: string | null;
  deleted_at: string | null;
}
