import { ComponentContainer } from "@/components/ui-components/ComponentContainer/ComponentContainer";
import { FC } from "react";
import { NavbarContainer } from "./Navbar.styled";
import { GoBook } from "react-icons/go";
import { NavigationItem } from "@/components/ui-components/NavigationItem/NavigationItem";
import {
  useCurrentTheme,
  useSelectDarkTheme,
  useSelectLightTheme,
  useTheme,
} from "@/hooks/useTheme/useTheme";
import { DARK_THEME } from "@/hooks/useTheme/themes";

// __TODO__ - This will come from database later
const menuItems = [
  {
    content: "item 1",
  },
  {
    content: "item 2",
  },
  {
    content: "item 3",
  },
  {
    content: "item 4",
  },
];

export const Navbar: FC = () => {
  const selectDarkTheme = useSelectDarkTheme();
  const selectLightTheme = useSelectLightTheme();

  return (
    <ComponentContainer>
      <NavbarContainer>
        <div className="iconAndTitle">
          <GoBook className="svgIcon" />
          <p className="menuTitle">Interactive Menu</p>
        </div>
        <div className="navigationItems">
          <ul>
            {menuItems.map((item) => (
              <NavigationItem key={item.content}>{item.content}</NavigationItem>
            ))}
          </ul>
        </div>
        <p style={{ color: "red" }}>{useCurrentTheme()} from navbar</p>
        {useCurrentTheme() === DARK_THEME ? (
          <button onClick={selectLightTheme}>Select Light Theme</button>
        ) : (
          <button onClick={selectDarkTheme}>Select Dark Theme</button>
        )}
      </NavbarContainer>
    </ComponentContainer>
  );
};
