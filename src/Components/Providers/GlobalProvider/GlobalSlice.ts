import type { GlobalProps } from "@Components/Utils/type";
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

const initialState: GlobalProps = {
  theme: localStorage.getItem("theme") || "light",
};

const globalSlice = createSlice({
  initialState,
  name: "globalSlice",
  reducers: {
    setUserDetails: (state, action: PayloadAction<GlobalProps["user"]>) => {
      return { ...state, user: action.payload };
    },
    setTheme: (state, action: PayloadAction<string>) => {
      localStorage.setItem("theme", action.payload);
      return { ...state, theme: action.payload };
    },
    clearGlobalState: () => initialState,
  },
});

export default globalSlice;

export const { setUserDetails, clearGlobalState, setTheme } =
  globalSlice.actions;
