import { mediaQueries } from "@/styles/media-queries";
import styled from "styled-components";

export const Grid4Cols = styled.div`
  display: grid;
  grid-gap: var(--spacingShort);

  @media ${mediaQueries.minWidthXL} {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }

  @media ${mediaQueries.maxWidthXL} {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  @media ${mediaQueries.maxWidthLG} {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media ${mediaQueries.maxWidthMD} {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
`;
