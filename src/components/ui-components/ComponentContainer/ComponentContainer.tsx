import { FC, ReactNode } from "react";
import { ComponentContainerWrapper } from "./ComponentContainer.styled";

type Props = {
  children: ReactNode;
  innerContainerClass?: string;
  outerContainerClass?: string;
};

export const ComponentContainer: FC<Props> = ({
  children,
  innerContainerClass,
  outerContainerClass,
}) => {
  return (
    <ComponentContainerWrapper className={outerContainerClass}>
      <div className={innerContainerClass}>{children}</div>
    </ComponentContainerWrapper>
  );
};
