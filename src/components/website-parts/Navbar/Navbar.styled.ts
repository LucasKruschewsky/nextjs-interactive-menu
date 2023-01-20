import styled from "styled-components";

export const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  color: ${(props) => props.theme.secondary};
  padding: var(--spacingVeryShort) 0;

  .iconAndTitle {
    display: flex;
    align-items: center;

    .menuTitle {
      margin-left: var(--spacingShort);
      text-transform: uppercase;
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
