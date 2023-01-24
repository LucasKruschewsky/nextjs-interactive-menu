import { ComponentContainer } from "@/components/ui-components/ComponentContainer/ComponentContainer";
import { FC, useCallback, useEffect, useState } from "react";
import { NavbarContainer } from "./Navbar.styled";
import { GoBook } from "react-icons/go";
import { useIsDarkModePreferred } from "@/hooks/useIsDarkModePreferred";
import { SelectButton } from "@/components/ui-components/SelectButton/SelectButton";
import { DARK_THEME, LIGHT_THEME } from "@/constants/themeConstants";
import { bodyClassListContains, getBodyClassListArray } from "./Navbar.helper";

export const Navbar: FC = () => {
  let isDarkModePreferred = useIsDarkModePreferred();

  const [documentBodyClassList, setDocumentBodyClassList] = useState<string[]>([
    "",
  ]);

  useEffect(() => {
    setDocumentBodyClassList(getBodyClassListArray());
  }, []);

  const handleToggleTheme = useCallback(() => {
    if (
      bodyClassListContains(DARK_THEME) ||
      bodyClassListContains(LIGHT_THEME)
    ) {
      document.body.classList.toggle(DARK_THEME);
      document.body.classList.toggle(LIGHT_THEME);
      setDocumentBodyClassList(getBodyClassListArray());
    }

    if (
      isDarkModePreferred &&
      !bodyClassListContains(DARK_THEME) &&
      !bodyClassListContains(LIGHT_THEME)
    ) {
      document.body.classList.add(LIGHT_THEME);
      setDocumentBodyClassList(getBodyClassListArray());
      return;
    }

    if (
      !isDarkModePreferred &&
      !bodyClassListContains(DARK_THEME) &&
      !bodyClassListContains(LIGHT_THEME)
    ) {
      document.body.classList.add(DARK_THEME);
      setDocumentBodyClassList(getBodyClassListArray());
      return;
    }
  }, [isDarkModePreferred]);

  return (
    <ComponentContainer>
      <NavbarContainer>
        <div className="iconAndTitle">
          <GoBook className="svgIcon" />
          <p className="menuTitle">Interactive Menu</p>
        </div>
        <div className="navigationItems">{documentBodyClassList}</div>

        <SelectButton
          checked={isDarkModePreferred}
          onChange={handleToggleTheme}
        />
      </NavbarContainer>
    </ComponentContainer>
  );
};
