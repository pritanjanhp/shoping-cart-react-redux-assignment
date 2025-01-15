import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

export const fetchPdt = createAsyncThunk("fetchPdt", async () => {
  const resp = await fetch("https://dummyjson.com/products");
  const data = await resp.json();
  // console.log(data);
  return data;
});

type itemType = {
  quantity: number;
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  images: string[];
};

interface ProductsState {
  items: itemType[];
  cart: itemType[];
  status: "idle" | "loading" | "success" | "failed";
  productQuantity: number;
}

const cartSlice = createSlice({
  name: "products",
  initialState: {
    items: [],
    cart: [],
    status: "idle",
    productQuantity: 0
  } as ProductsState,
  reducers: {
    addProductToCart: (state, action: PayloadAction<itemType>) => {
      const productInCart = state.cart.find(
        (item) => item.id === action.payload.id
      );
      if (productInCart) {
        productInCart.quantity += 1;
        state.productQuantity += 1;
      } else {
        state.cart.push({ ...action.payload, quantity: 1 });
        state.productQuantity += 1;
      }
    },
    // addProductToCart: (state, action: PayloadAction<itemType>) => {
    //   // const pdt = action.payload;
    //   console.log(action.payload);
    //   const existingPdt = state.cart.findIndex(
    //     (item) => item.id === action.payload.id
    //   );
    //   // console.log("product added", state.items);
    //   if (existingPdt >= 0) {
    //     state.productQuantity += 1;
    //   } else {
    //     state.items = [...state.items, action.payload];
    //     // state.items.push(action.payload);
    //   }
    // },

    // removeProductFromCart: (state, action: PayloadAction<number>) => {
    //   state.items = state.items.filter((item) => item.id !== action.payload);
    // },
    // updateQuantity: (
    //   state,
    //   action: PayloadAction<{ id: number; quantity: number }>
    // ) => {
    //   const product = state.items.find((item) => item.id === action.payload.id);
    //   if (product && action.payload.quantity >= 0) {
    //     product.quantity = action.payload.quantity;
    //   }
    // }

    removeProductFromCart: (state, action: PayloadAction<number>) => {
      const productIndex = state.cart.findIndex(
        (item) => item.id === action.payload
      );
      if (productIndex >= 0) {
        state.productQuantity -= state.cart[productIndex].quantity;
        state.cart.splice(productIndex, 1);
      }
    },

    updateQuantity: (
      state,
      action: PayloadAction<{ id: number; quantity: number }>
    ) => {
      const product = state.cart.find((item) => item.id === action.payload.id);
      if (product && action.payload.quantity >= 0) {
        const diff = action.payload.quantity - product.quantity;
        product.quantity = action.payload.quantity;
        state.productQuantity += diff;
      }
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPdt.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(fetchPdt.fulfilled, (state, action) => {
      state.items = action.payload.products;
      state.status = "success";
    });
  }
});

export const { addProductToCart, removeProductFromCart, updateQuantity } =
  cartSlice.actions;
export default cartSlice.reducer;
