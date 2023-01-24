import { useEffect, useRef, useState } from "react";

interface BodyThemeClasses {
  hasDarkThemeClass: boolean;
  hasLightThemeClass: boolean;
  documentBodyClassList: DOMTokenList | null;
}

export const useBodyThemeClasses = (): BodyThemeClasses => {
  const [hasDarkThemeClass, setHasDarkThemeClass] = useState<boolean>(false);
  const [hasLightThemeClass, setHasLightThemeClass] = useState<boolean>(false);
  const [documentBodyClassList, setDocumentBodyClassList] =
    useState<DOMTokenList | null>(null);

  useEffect(() => {
    setDocumentBodyClassList(document.body.classList);
  });

  return { hasDarkThemeClass, hasLightThemeClass, documentBodyClassList };
};
