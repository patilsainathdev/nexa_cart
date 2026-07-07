import { configureStore } from '@reduxjs/toolkit';
import productSlice from './slice/ProductSlice';
import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux';

export const store = configureStore({
  reducer: {
    products: productSlice
  },
});

// 🚀 FIX: Ensure you capture the explicit instance type using 'typeof'
export type AppStore = typeof store; 
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: ()=> AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

// import { configureStore } from "@reduxjs/toolkit";
// import { useSelector, TypedUseSelectorHook } from 'react-redux';
// import productSlice from './slice/ProductSlice';

// export const makeStore = () => {
//   return configureStore({
//     reducer: {
//       products: productSlice
//     },
//   });
// };

// // Infer types based on the instance created by makeStore
// export type AppStore = ReturnType<typeof makeStore>;
// export type RootState = ReturnType<AppStore["getState"]>;
// export type AppDispatch = AppStore["dispatch"];

// export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;