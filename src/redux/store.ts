import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { productsSlice } from "./products/products-slice";
import { categorySlice } from "./categories/categories-slice";
import { cartSlice } from "./cart/cart-slice";
import storage from "redux-persist/lib/storage";
import { persistStore, persistReducer } from "redux-persist";
import { orderSlice } from "./order/order-slice";

const persistConfig = {
  key: "cart",
  storage,
  whitelist: ["cart"],
};

const rootReducer = combineReducers({
  cart: cartSlice.reducer,
  products: productsSlice.reducer,
  categories: categorySlice.reducer,
  order: orderSlice.reducer
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
  devTools: true,
});

export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
