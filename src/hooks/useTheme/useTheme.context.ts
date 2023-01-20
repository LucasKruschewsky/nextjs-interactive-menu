import { createContext } from "react";
import { DARK_THEME } from "./themes";
import { ContextStateType } from "./useTheme.types";

export const SelectedThemeContext = createContext<ContextStateType>({
  currentTheme: "Dark Theme",
  selectDarkTheme: () => {},
  selectLightTheme: () => {},
});
