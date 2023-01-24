import { useEffect, useState } from "react";

export const useIsDarkModePreferred = (): boolean => {
  const [isDarkModePreferred, setIsDarkModePreferred] = useState<boolean>(true);

  useEffect(() => {
    setIsDarkModePreferred(
      window.matchMedia("(prefers-color-scheme: dark)").matches
    );
  });

  return isDarkModePreferred;
};
