import Link from "next/link";
import { FC, ReactNode } from "react";

interface Props {
  href?: string;
  children: ReactNode;
}

export const NavigationItem: FC<Props> = ({ href, children }) => {
  return (
    <Link href={href ?? "#"}>
      <li>{children}</li>
    </Link>
  );
};
