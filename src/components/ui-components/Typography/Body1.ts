import { mediaQueries } from "@/styles/media-queries";
import styled from "styled-components";
import { isTextBold, isTextHighlighted } from "./Typography.helper";
import { TypographyProps } from "./Typography.props";

export const Body1 = styled.p<TypographyProps>`
  font-size: 1rem;
  color: ${(props) => isTextHighlighted(props)};
  font-weight: ${(props) => isTextBold(props)};

  margin-bottom: var(--spacingShort);

  @media ${mediaQueries.maxWidthSM} {
    font-size: 0.9rem;
  }
`;
