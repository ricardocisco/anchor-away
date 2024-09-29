import { configureStore } from "@reduxjs/toolkit";
import { yachtSlice } from "./reducers/itens";
import { querySlice } from "./reducers/busca";

export const store = configureStore({
  reducer: {
    yacht: yachtSlice.reducer,
    query: querySlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
