import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Product {
  _id: string;
  title: string;
  description: string;
  price: number;
  category: string;
  stock: number;
  imageUrl: string;
  status: string;
}

interface CartItem{
  productId : Product;
  quantity: number;
  _id: string;
}

interface ProductsState {
  items: Product[];
  cartItems: CartItem[];
  loading: boolean;
  error: string | null;
}

const initialState: ProductsState = {
  items: [],
  cartItems:[],
  loading: false,
  error: null,
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    // ⚡ Signal to the store that an API request has started
    fetchProductsStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    // ⚡ Commit the successfully fetched array directly into state
    fetchProductsSuccess: (state, action: PayloadAction<Product[]>) => {
      state.loading = false;
      state.items = action.payload;
      console.log('state.items', state.items)
    },
    // ⚡ Commit the successfully fetched array directly into state
    fetchCartItemsSuccess: (state, action: PayloadAction<Product[]>) => {
      state.loading = false;
      state.cartItems = action.payload;
      console.log('state.items', state.items)
    },
    // ⚡ Capture an infrastructure failure message
    fetchProductsFailure: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    }
  },
});

// Export your synchronous action creators
export const { 
  fetchProductsStart, 
  fetchProductsSuccess, 
  fetchProductsFailure,
  fetchCartItemsSuccess
} = productsSlice.actions;

export default productsSlice.reducer;