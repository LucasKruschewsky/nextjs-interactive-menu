import { TypographyProps } from "./Typography.props";

export const isTextHighlighted = (props: TypographyProps) =>
  props.highlighted ? `var(--textColorHighlight)` : `var(--textColor)`;

export const isTextBold = (props: TypographyProps) =>
  props.bold ? `700` : `500`;
