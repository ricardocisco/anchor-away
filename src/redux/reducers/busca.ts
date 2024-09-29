import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface queryProps {
  query: string;
  slidePrice: number;
  slideLength: string;
  slideYear: number;
  slideGuests: number;
  slideBeds: number;
  selectLocation: string;
}

const initialState: queryProps = {
  query: "",
  slidePrice: 0,
  slideLength: "",
  slideBeds: 0,
  slideGuests: 0,
  slideYear: 0,
  selectLocation: "",
};

export const querySlice = createSlice({
  name: "query",
  initialState,
  reducers: {
    setQuery: (state, action: PayloadAction<string>) => {
      state.query = action.payload;
    },
    setPrice: (state, action: PayloadAction<number>) => {
      state.slidePrice = action.payload;
    },
    setLenght: (state, action: PayloadAction<string>) => {
      state.slideLength = action.payload;
    },
    setBed: (state, action: PayloadAction<number>) => {
      state.slideBeds = action.payload;
    },
    setGuest: (state, action: PayloadAction<number>) => {
      state.slideGuests = action.payload;
    },
    setYear: (state, action: PayloadAction<number>) => {
      state.slideYear = action.payload;
    },
    setLocation: (state, action: PayloadAction<string>) => {
      state.selectLocation = action.payload;
    },
  },
});

export const {
  setQuery,
  setPrice,
  setLenght,
  setBed,
  setGuest,
  setYear,
  setLocation,
} = querySlice.actions;
export default querySlice.reducer;
