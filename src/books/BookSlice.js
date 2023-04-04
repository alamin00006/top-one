const { createSlice } = require("@reduxjs/toolkit");

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    count: 0,
  },
  reducers: {
    increment: (state) => {
      state.count = state.count + 1;
    },
    decrement: (state) => {
      state.count = state.count - 1;
    },
  },
});
export const { increment, decrement } = counterSlice.actions;
export default counterSlice.reducer;

// import { createSlice } from "@reduxjs/toolkit";

// const initialBooks = {
//   books: [
//     { id: 1, title: "Book1", author: "Alamin" },
//     { id: 1, title: "Book1", author: "Alamin" },
//   ],
// };
// export const bookSlice = createSlice({
//   name: "Books",
//   initialSate: initialBooks,
//   reducers: {
//     showBooks: (state) => state,
//   },
// });
// export const { showBooks } = bookSlice.actions;
// export default bookSlice.reducer;
