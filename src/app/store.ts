import { configureStore } from "@reduxjs/toolkit";
import ProductsReducer from "../feature/CartSlice";
import userReducer from "../feature/UserSlice";

export const store = configureStore({
  reducer: {
    products: ProductsReducer,
    user: userReducer
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
