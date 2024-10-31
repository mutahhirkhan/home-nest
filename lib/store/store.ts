// lib/store/store.ts
import { counterSlice } from "@lib/features/counter/counterSlice";
import { quotesApiSlice } from "@lib/features/quotes/quotesApiSlice";
import { Action, ThunkAction, combineSlices, configureStore } from "@reduxjs/toolkit";
import { Persistor, persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["counter"], // Add slices you want to persist, e.g., "counter"
};

// Use `combineSlices` as per the Next.js example, then persist the root reducer.
const rootReducer = combineSlices(counterSlice, quotesApiSlice);
const persistedReducer = persistReducer(persistConfig, rootReducer);


// Create a singleton store and persistor instance
let store: ReturnType<typeof configureStore> | undefined;
export let persistor: Persistor;

// `makeStore` encapsulates the store configuration to allow
// creating unique store instances, which is particularly important for
// server-side rendering (SSR) scenarios.
export const makeStore = () => {
  if (!store) {
    store = configureStore({
      reducer: persistedReducer,
      // Adding the api middleware enables caching, invalidation, polling,
      // and other useful features of `rtk-query`.
      middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware({
          serializableCheck: {
            ignoredActions: ["persist/PERSIST", "persist/REHYDRATE"], // Ignore persist actions for serialization
          },
        }).concat(quotesApiSlice.middleware);
      },
    });
    persistor = persistStore(store);
  }
  return store;
};

// Initialize the persistor
// export const persistor = persistStore(makeStore());

// Infer the return type of `makeStore`
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` type from the persisted reducer
export type RootState = ReturnType<typeof rootReducer>;
// Infer the `AppDispatch` type from the store itself
export type AppDispatch = AppStore["dispatch"];
export type AppThunk<ThunkReturnType = void> = ThunkAction<ThunkReturnType, RootState, unknown, Action>;
