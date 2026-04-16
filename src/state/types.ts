export interface GetParams<T> {
  filterBy?: string;
  filterValue?: string;
  sortBy?: string;
  sortOrder?: 'asc' | 'desc';
  page?: number;
  limit?: number;
  withDeleted?: boolean;
  withEntities?: string[];
}

export interface DataStore<T> {
  data: T[];
  item: T | null;
  getParams?: GetParams<T>;
  isLoading: boolean;
  error: string | null;
  getData: () => Promise<void>;
  getItem?: (id: number) => Promise<void>;
  createItem?: (item: Partial<T>) => Promise<void>;
  updateItem?: (id: number, updates: Partial<T>) => Promise<void>;
  deleteItem?: (id: number) => Promise<void>;
}

type ColorScheme = 'dark' | 'light'

export interface AuthStore {
  user: User | null;
  authData: any | null;
  login: () => Promise<void>
  logout: () => Promise<void>
}

export interface User {
  id: number;
  name: string;
  username: string;
  role: 'admin' | 'manager' | 'cashier';
}


// Product interfaces.
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

export interface ProductFilters {
  name?: string;
  category?: string;
  min_price?: number;
  max_price?: number;
  created_from?: string;
  created_to?: string;
  sku?: number;
}

// Category interfaces.
export interface Category {
  id: number;
  name: string;
  created_at: string;
  updated_at: string | null;
  deleted_at: string | null;
}

// Order interfaces.
export interface Order {
  id: number;
  user_id: number;
  order_items: OrderItem[];
  created_at: string;
  updated_at: string | null;
  deleted_at: string | null;
}

export interface OrderItem {
  id: number;
  order_id: number;
  order_items: Product[];
  created_at: string;
  updated_at: string | null;
  deleted_at: string | null;
}
