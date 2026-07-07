"use client";

import React, { useRef } from 'react';
import { Provider } from 'react-redux';
import { store, AppStore } from './store'; // Path to your configureStore file

interface StoreProviderProps {
  children: React.ReactNode;
}

export default function StoreProvider({ children }: StoreProviderProps) {
  // Use a mutable ref to hold the store instance across re-renders
  const storeRef = useRef<AppStore | null>(null);
  
  if (!storeRef.current) {
    storeRef.current = store;
  }

  return (
    <Provider store={storeRef.current}>
      {children}
    </Provider>
  );
}



// "use client";

// import React, { useRef } from 'react';
// import { Provider } from 'react-redux';
// import { makeStore, AppStore } from './store'; // Path to your configureStore file

// export default function StoreProvider({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   // Use a ref to ensure the store is only created once per page load/request
//   const storeRef = useRef<AppStore | null>(null);
  
//   if (!storeRef.current) {
//     storeRef.current = makeStore();
//   }

//   return <Provider store={storeRef.current}>{children}</Provider>;
// }