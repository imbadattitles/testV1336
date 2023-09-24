import { configureStore } from "@reduxjs/toolkit";
import firstReducer from "./firstPageSlice";
import secondReducer from "./secondPageSlice";

const store = configureStore({
  reducer: {
    first: firstReducer,
    second: secondReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
