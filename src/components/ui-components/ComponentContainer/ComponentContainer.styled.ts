import styled from "styled-components";

export const ComponentContainerWrapper = styled.div`
  max-width: 1440px;
  margin: auto;

  @media (min-width: 1281px) {
    padding: 0 var(--sectionSpacingVeryLarge);
  }

  @media (max-width: 1280px) {
    padding: 0 var(--sectionSpacingLarge);
  }

  @media (max-width: 768px) {
    padding: 0 var(--sectionSpacingMedium);
  }

  @media (max-width: 414px) {
    padding: 0 var(--sectionSpacingShort);
  }

  @media (max-width: 360px) {
    padding: 0 var(--sectionSpacingVeryShort);
  }

  div {
    .containerWrapper {
      width: 100%;
    }
  }
`;
