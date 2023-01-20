export const DARK_THEME = "Dark Theme";
export const LIGHT_THEME = "Light Theme";

export type ThemeType = {
  themeName: typeof DARK_THEME | typeof LIGHT_THEME;

  primaryDarker: string;
  primaryDark: string;
  primary: string;
  primaryLight: string;

  secondaryDarker: string;
  secondaryDark: string;
  secondary: string;
  secondaryLight: string;

  white: string;

  backgroundColor: string;
};

export const darkTheme: ThemeType = {
  themeName: DARK_THEME,

  primaryDarker: "#1c1c1c",
  primaryDark: "#2f2f2f",
  primary: "#434343",
  primaryLight: "#575757",

  secondaryDarker: "#fdbe39",
  secondaryDark: "#fecf3e",
  secondary: "#ffda3d",
  secondaryLight: "#fff056",

  white: "#eee",

  backgroundColor: "#1c1c1c",
};

export const lightTheme: ThemeType = {
  themeName: LIGHT_THEME,

  primaryDarker: "#fdbe39",
  primaryDark: "#fecf3e",
  primary: "#ffda3d",
  primaryLight: "#fff056",

  secondaryDarker: "#1c1c1c",
  secondaryDark: "#2f2f2f",
  secondary: "#434343",
  secondaryLight: "#575757",

  white: "#eee",

  backgroundColor: "#eee",
};
