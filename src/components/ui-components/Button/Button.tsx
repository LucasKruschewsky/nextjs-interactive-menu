import { Button as PrimeButton } from "primereact/button";
import { FC, ReactNode } from "react";

interface Props {
  className?: string;
  children?: ReactNode;
}

export const Button: FC<Props> = ({ className, children }) => {
  return <PrimeButton className={`${className}`}>{children}</PrimeButton>;
};
