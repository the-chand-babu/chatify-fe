import { configureStore } from "@reduxjs/toolkit";
import { Provider, useDispatch, useSelector } from "react-redux";
import globalSlice, { setTheme } from "./GlobalSlice";
import { useEffect } from "react";

interface disPatcherProps {
  handleThemeChange: (theme: string) => void;
}

export const Store = configureStore({
  reducer: {
    globalSlice: globalSlice.reducer,
  },
});

export const useGlobalSelector = () => {
  const { theme } = useSelector((state: any) => state.globalSlice);

  return { theme };
};

export const useGlobalDispatcher = (): disPatcherProps => {
  const dispatch = useDispatch();

  const handleThemeChange = (theme: string) => {
    dispatch(setTheme(theme));
  };

  return {
    handleThemeChange,
  };
};

export const GlobalProvider = ({ children }: any) => {
  useEffect(() => {
    document.documentElement.setAttribute(
      "data-bs-theme",
      localStorage.getItem("theme") || "light"
    );
  }, []);

  return <Provider store={Store}>{children}</Provider>;
};
