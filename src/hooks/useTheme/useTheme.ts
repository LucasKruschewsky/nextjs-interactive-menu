import { DARK_THEME } from "@/hooks/useTheme/themes";
import { useContext, useEffect, useReducer } from "react";
import { SelectedThemeContext } from "./useTheme.context";
import { useThemeReducer } from "./useTheme.reducer";
import { ContextStateType } from "./useTheme.types";

export const SWITCH_DARK_THEME = "SWITCH_DARK_THEME";
export const SWITCH_LIGHT_THEME = "SWITCH_LIGHT_THEME";

export const useTheme = (): ContextStateType => {
  const [currentTheme, dispatch] = useReducer(useThemeReducer, DARK_THEME);

  const selectDarkTheme = () => {
    dispatch({ type: SWITCH_DARK_THEME });
  };

  const selectLightTheme = () => {
    dispatch({ type: SWITCH_LIGHT_THEME });
  };

  return { currentTheme, selectDarkTheme, selectLightTheme };
};

export const useCurrentTheme = () => {
  const { currentTheme } = useContext(SelectedThemeContext);
  return currentTheme;
};

export const useSelectDarkTheme = () => {
  const { selectDarkTheme } = useContext(SelectedThemeContext);
  return selectDarkTheme;
};

export const useSelectLightTheme = () => {
  const { selectLightTheme } = useContext(SelectedThemeContext);
  return selectLightTheme;
};
