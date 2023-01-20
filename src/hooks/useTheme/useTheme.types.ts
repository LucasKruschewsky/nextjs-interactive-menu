import { DARK_THEME, LIGHT_THEME } from "./themes";
import { SWITCH_DARK_THEME, SWITCH_LIGHT_THEME } from "./useTheme";

export type ContextStateType = {
  currentTheme: CurrentThemeType;
  selectDarkTheme: () => void;
  selectLightTheme: () => void;
};

export type CurrentThemeType = typeof DARK_THEME | typeof LIGHT_THEME | null;

export type UseThemeActionType = {
  type: typeof SWITCH_LIGHT_THEME | typeof SWITCH_DARK_THEME;
};
