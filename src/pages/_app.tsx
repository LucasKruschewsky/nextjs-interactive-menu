import { useTheme } from "@/hooks/useTheme/useTheme";
import { SelectedThemeContext } from "@/hooks/useTheme/useTheme.context";
import "@/styles/variables.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SelectedThemeContext.Provider value={useTheme()}>
      <Component {...pageProps} />
    </SelectedThemeContext.Provider>
  );
}
