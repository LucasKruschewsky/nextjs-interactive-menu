import { ComponentContainer } from "@/components/ui-components/ComponentContainer/ComponentContainer";
import { Navbar } from "@/components/website-parts/Navbar/Navbar";
import { FC, ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export const DefaultLayout: FC<Props> = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
};
