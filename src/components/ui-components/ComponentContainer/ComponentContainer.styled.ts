import { mediaQueries } from "@/styles/media-queries";
import styled from "styled-components";

export const ComponentContainerWrapper = styled.div`
  max-width: 1440px;
  margin: auto;

  @media ${mediaQueries.minWidthLG} {
    padding: 0 var(--sectionSpacingVeryLarge);
  }

  @media ${mediaQueries.maxWidthLG} {
    padding: 0 var(--sectionSpacingLarge);
  }

  @media ${mediaQueries.maxWidthMD} {
    padding: 0 var(--sectionSpacingMedium);
  }

  @media ${mediaQueries.maxWidthSM} {
    padding: 0 var(--sectionSpacingShort);
  }

  @media ${mediaQueries.maxWidthXS} {
    padding: 0 var(--sectionSpacingVeryShort);
  }

  div {
    .containerWrapper {
      width: 100%;
    }
  }
`;
