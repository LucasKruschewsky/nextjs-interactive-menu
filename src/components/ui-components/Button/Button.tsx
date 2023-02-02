import Link from "next/link";
import { Button as PrimeButton } from "primereact/button";
import { FC, ReactNode } from "react";

interface Props {
  className?: string;
  children?: ReactNode;
  href?: string;
}

export const Button: FC<Props> = ({ href, className, children }) => {
  return href ? (
    <Link href={href}>
      <PrimeButton className={`${className}`}>{children}</PrimeButton>
    </Link>
  ) : (
    <PrimeButton className={`${className}`}>{children}</PrimeButton>
  );
};
