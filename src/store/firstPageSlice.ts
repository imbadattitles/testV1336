import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type Brigade = {
  id: number;
  brigade_name: string;
  connectionStateId: number;
  department: {
    id: number;
  };
  position: {
    field: string;
    cluster: number;
    well: number;
  };
};

export type Department = {
  id: number;
  name: string;
};

export type ConnectionState = {
  connectionStateId: number;
  name: string;
};

type firstState = {
  brigades: Brigade[];
  loadingBrigades: boolean;
  departments: Department[];
  loadingDepartments: boolean;
  connectionState: ConnectionState[];
  loadingConnectionState: boolean;
};

const initialState: firstState = {
  brigades: [],
  loadingBrigades: true,
  departments: [],
  loadingDepartments: true,
  connectionState: [],
  loadingConnectionState: true,
};

const firstPageSlice = createSlice({
  name: "first",
  initialState,
  reducers: {
    setLoadingBrigades(state, action: PayloadAction<boolean>) {
      state.loadingBrigades = action.payload;
    },
    setBrigades(state, action: PayloadAction<Brigade[]>) {
      state.brigades = action.payload;
    },
    setLoadingDepartments(state, action: PayloadAction<boolean>) {
      state.loadingDepartments = action.payload;
    },
    setDepartments(state, action: PayloadAction<Department[]>) {
      state.departments = action.payload;
    },
    setLoadingConnectionState(state, action: PayloadAction<boolean>) {
      state.loadingConnectionState = action.payload;
    },
    setConnectionState(state, action: PayloadAction<ConnectionState[]>) {
      state.connectionState = action.payload;
    },
  },
});

export const {
  setLoadingBrigades,
  setBrigades,
  setLoadingDepartments,
  setDepartments,
  setLoadingConnectionState,
  setConnectionState,
} = firstPageSlice.actions;
export default firstPageSlice.reducer;
