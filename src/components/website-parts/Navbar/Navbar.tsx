import { ComponentContainer } from "@/components/ui-components/ComponentContainer/ComponentContainer";
import { FC, useCallback, useEffect, useState } from "react";
import { NavbarContainer } from "./Navbar.styled";
import { GoBook } from "react-icons/go";
import { useIsDarkModePreferred } from "@/hooks/useIsDarkModePreferred";
import { SelectButton } from "@/components/ui-components/SelectButton/SelectButton";
import { DARK_THEME, LIGHT_THEME } from "@/constants/themeConstants";

export const Navbar: FC = () => {
  let isDarkModePreferred = useIsDarkModePreferred();

  const [documentBodyClassList, setDocumentBodyClassList] =
    useState<DOMTokenList>();
  const [documentBodyClassListValue, setDocumentBodyClassListValue] =
    useState<string>("");

  useEffect(() => {
    setDocumentBodyClassList(document.body.classList);
    setDocumentBodyClassListValue(document.body.classList.value);
  }, []);

  const handleToggleTheme = useCallback(() => {
    if (
      documentBodyClassList?.contains(DARK_THEME) ||
      documentBodyClassList?.contains(LIGHT_THEME)
    ) {
      document.body.classList.toggle(DARK_THEME);
      document.body.classList.toggle(LIGHT_THEME);
      setDocumentBodyClassList(document.body.classList);
      setDocumentBodyClassListValue(document.body.classList.value);
    }

    if (
      isDarkModePreferred &&
      !documentBodyClassList?.contains(DARK_THEME) &&
      !documentBodyClassList?.contains(LIGHT_THEME)
    ) {
      document.body.classList.add(LIGHT_THEME);
      setDocumentBodyClassList(document.body.classList);
      setDocumentBodyClassListValue(document.body.classList.value);
      return;
    }

    if (
      !isDarkModePreferred &&
      !documentBodyClassList?.contains(DARK_THEME) &&
      !documentBodyClassList?.contains(LIGHT_THEME)
    ) {
      document.body.classList.add(DARK_THEME);
      setDocumentBodyClassList(document.body.classList);
      setDocumentBodyClassListValue(document.body.classList.value);
      return;
    }
  }, [documentBodyClassList, isDarkModePreferred]);

  return (
    <ComponentContainer>
      <NavbarContainer>
        <div className="iconAndTitle">
          <GoBook className="svgIcon" />
          <p className="menuTitle">Interactive Menu</p>
        </div>
        <div className="navigationItems">{documentBodyClassListValue}</div>

        <SelectButton
          checked={isDarkModePreferred}
          onChange={handleToggleTheme}
        />
      </NavbarContainer>
    </ComponentContainer>
  );
};
