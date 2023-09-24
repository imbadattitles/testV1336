import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type Point = {
  x: string;
  y: number;
};

type firstState = {
  points: Point[];
  loadingPoints: boolean;
  pointsLength: number;
};

const initialState: firstState = {
  points: [],
  loadingPoints: true,
  pointsLength: 0,
};

const secondPageSlice = createSlice({
  name: "second",
  initialState,
  reducers: {
    setLoadingPoints(state, action: PayloadAction<boolean>) {
      state.loadingPoints = action.payload;
    },
    setPoints(state, action: PayloadAction<Point[]>) {
      state.points = action.payload;
      state.pointsLength = action.payload.length;
    },
  },
});

export const { setLoadingPoints, setPoints } = secondPageSlice.actions;
export default secondPageSlice.reducer;
