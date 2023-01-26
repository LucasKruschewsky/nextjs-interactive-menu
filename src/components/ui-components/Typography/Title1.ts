import { mediaQueries } from "@/styles/media-queries";
import styled from "styled-components";
import { isTextBold, isTextHighlighted } from "./Typography.helper";
import { TypographyProps } from "./Typography.props";

export const Title1 = styled.h1<TypographyProps>`
  font-size: 2rem;
  color: ${(props) => isTextHighlighted(props)};
  font-weight: ${(props) => isTextBold(props)};

  margin-bottom: var(--sectionSpacingVeryShort);

  text-transform: ${(props) => (props.uppercase ? "uppercase" : "none")};

  @media ${mediaQueries.maxWidthMD} {
    font-size: 1.5rem;
  }
`;
