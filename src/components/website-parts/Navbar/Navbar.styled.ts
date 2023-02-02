import styled from "styled-components";

export const NavbarContainer = styled.nav`
  color: var(--secondary);
  padding: var(--spacingShort) 0 var(--sectionSpacingShort);

  &.absolute-navbar {
    position: absolute;
    z-index: var(--highestZ);
    width: 100%;
  }

  .navbar-inner-container {
    display: flex;
    width: 100%;
    justify-content: space-between;
  }

  .iconAndTitle {
    display: flex;
    align-items: center;

    .menuTitle {
      margin-left: var(--spacingShort);
    }

    .svgIcon {
      fill: var(--secondary);
      height: 40px;
      width: 40px;
    }
  }

  .navigationItems {
    ul {
      display: flex;
      li {
        text-transform: uppercase;
        padding: var(--spacingShort);
      }
    }
  }
`;

export const SelectButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  .icon-container {
    min-width: 16px;
    display: flex;
  }

  .prime-input-switch {
    margin: 0 var(--spacingVeryShort);
  }
`;
