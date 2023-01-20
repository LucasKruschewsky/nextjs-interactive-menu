import {
  darkTheme,
  DARK_THEME,
  lightTheme,
  LIGHT_THEME,
  ThemeType,
} from "./themes";
import { SWITCH_DARK_THEME, SWITCH_LIGHT_THEME } from "./useTheme";
import {
  ContextStateType,
  CurrentThemeType,
  UseThemeActionType,
} from "./useTheme.types";

export const useThemeReducer = (
  state: ContextStateType["currentTheme"],
  action: UseThemeActionType
): ContextStateType["currentTheme"] => {
  switch (action.type) {
    case SWITCH_DARK_THEME:
      return DARK_THEME;
    case SWITCH_LIGHT_THEME:
      return LIGHT_THEME;
    default:
      throw new Error("Unsupported Theme");
  }
};
