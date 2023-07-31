import { createSlice } from "@reduxjs/toolkit";

export const contentSlice = createSlice({
  name: "content",
  initialState: {
    itemsList: [],
  },
  reducers: {
    addItem: (state, action) => {
      const { name } = action.payload;
      const existingItem = state.itemsList.find((item) => item.name === name);

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.itemsList.push({ ...action.payload, quantity: 1 });
      }
    },
    decreaseItem: (state, action) => {
      const { name } = action.payload;
      const existingItem = state.itemsList.find((item) => item.name === name);

      if (existingItem) {
        existingItem.quantity -= 1;
      } else {
        state.itemsList.push({ ...action.payload, quantity: 1 });
      }
    },
    removeItem: (state, action) => {
      const { name } = action.payload;
      state.itemsList = state.itemsList.filter((item) => item.name !== name);
    },
    clearItem: (state) => {
      state.itemsList = [];
    },
  },
});

// Action creators are generated for each case reducer function
export const { addItem, decreaseItem, removeItem, clearItem } =
  contentSlice.actions;

export default contentSlice.reducer;
export const selectItemsList = (state) => state.content.itemsList;
