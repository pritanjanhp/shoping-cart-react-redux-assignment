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
  thumbnail: string;
  images: string[];
};

interface ProductsState {
  items: itemType[];
  status: "idle" | "loading" | "success" | "failed";
  error: string | null;
}

const cartSlice = createSlice({
  name: "products",
  initialState: {
    items: [],
    status: "idle",
    error: null
  } as ProductsState,
  reducers: {
    addProductToCart: (state, action: PayloadAction<itemType>) => {
      const pdt = action.payload;
      const existingPdt = state.items.find((item) => item.id === pdt.id);
      if (existingPdt) {
        existingPdt.quantity += 1;
      } else {
        state.items.push({ ...pdt, quantity: 1 });
      }
    },

    removeProductFromCart: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    updateQuantity: (
      state,
      action: PayloadAction<{ id: number; quantity: number }>
    ) => {
      const product = state.items.find((item) => item.id === action.payload.id);
      if (product && action.payload.quantity >= 0) {
        product.quantity = action.payload.quantity;
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
    builder.addCase(fetchPdt.rejected, (state, action) => {
      state.status = "failed";
      state.error = action.error.message || "failed to fetch data";
    });
  }
});

export const { addProductToCart, removeProductFromCart, updateQuantity } =
  cartSlice.actions;
export default cartSlice.reducer;
