import { FC, useCallback, useEffect, useState } from "react";
import { GoBook } from "react-icons/go";
import { useIsDarkModePreferred } from "@/hooks/useIsDarkModePreferred";
import { SelectButton } from "@/components/ui-components/SelectButton/SelectButton";
import { DARK_THEME, LIGHT_THEME } from "@/constants/themeConstants";
import { bodyClassListContains, getBodyClassListArray } from "./Navbar.helper";
import { FaMoon, FaSun } from "react-icons/fa";
import { ComponentContainer } from "@/components/ui-components/ComponentContainer/ComponentContainer";
import { NavbarContainer, SelectButtonWrapper } from "./Navbar.styled";
import Link from "next/link";
import { Title1 } from "@/components/ui-components/Typography/Title1";

interface Props {
  positionAbsolute?: boolean;
}

export const Navbar: FC<Props> = ({ positionAbsolute }) => {
  const [documentBodyClassList, setDocumentBodyClassList] = useState<string[]>([
    "",
  ]);

  useEffect(() => {
    setDocumentBodyClassList(getBodyClassListArray());
  }, []);

  const isDarkModePreferred = useIsDarkModePreferred();
  const handleToggleTheme = useCallback(() => {
    if (
      bodyClassListContains(DARK_THEME) ||
      bodyClassListContains(LIGHT_THEME)
    ) {
      document.body.classList.toggle(DARK_THEME);
      document.body.classList.toggle(LIGHT_THEME);
      setDocumentBodyClassList(getBodyClassListArray());
      return;
    }

    // First "toggle" when user prefers dark mode
    if (
      isDarkModePreferred &&
      !bodyClassListContains(DARK_THEME) &&
      !bodyClassListContains(LIGHT_THEME)
    ) {
      document.body.classList.add(LIGHT_THEME);
      setDocumentBodyClassList(getBodyClassListArray());
      return;
    }

    // First "toggle" when user prefers light mode
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
    <NavbarContainer className={positionAbsolute ? "absolute-navbar" : ""}>
      <ComponentContainer innerContainerClass="navbar-inner-container">
        <div className="iconAndTitle">
          <GoBook className="svgIcon" />
          <Link href="/">
            <Title1 bold uppercase className="menuTitle">
              Interactive Menu
            </Title1>
          </Link>
        </div>

        <SelectButtonWrapper>
          <div className="icon-container">
            {(bodyClassListContains(DARK_THEME) ||
              (!bodyClassListContains(DARK_THEME) &&
                !bodyClassListContains(LIGHT_THEME) &&
                isDarkModePreferred)) && <FaSun />}
          </div>
          <SelectButton
            checked={isDarkModePreferred}
            onChange={handleToggleTheme}
          />
          <div className="icon-container">
            {(bodyClassListContains(LIGHT_THEME) ||
              (!bodyClassListContains(DARK_THEME) &&
                !bodyClassListContains(LIGHT_THEME) &&
                !isDarkModePreferred)) && <FaMoon />}
          </div>
        </SelectButtonWrapper>
      </ComponentContainer>
    </NavbarContainer>
  );
};
