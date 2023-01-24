import { useEffect, useState } from "react";

export const useIsDarkModePreferred = (): boolean | undefined => {
  const [isDarkModePreferred, setIsDarkModePreferred] = useState<boolean>();

  useEffect(() => {
    setIsDarkModePreferred(
      window.matchMedia("(prefers-color-scheme: dark)").matches
    );
  }, []);

  return isDarkModePreferred;
};
