import { configureStore } from "@reduxjs/toolkit";
import { Provider, useDispatch, useSelector } from "react-redux";
import globalSlice, { setTheme } from "./GlobalSlice";

export const Store = configureStore({
  reducer: {
    globalSlice: globalSlice.reducer,
  },
});

export const useGlobalSelector = () => {
  const data = useSelector((state) => state);
  console.log("this is data", data);
  return {};
};

export const useGlobalDispatcher = () => {
  const dispatch = useDispatch();

  const handleThemeChange = (theme: string) => {
    dispatch(setTheme(theme));
  };

  return {
    handleThemeChange,
  };
};

export const GlobalProvider = ({ children }: any) => {
  return <Provider store={Store}>{children}</Provider>;
};
