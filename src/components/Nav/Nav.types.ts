import { HTMLAttributes, ReactNode } from "react";
import IBasic from "../../types/IBasic";
import ITypography from "../Typography/Typography.types";

interface INav extends IBasic, HTMLAttributes<HTMLElement> {
  children: ReactNode;
}

export type INavLink = Omit<ITypography, "as"> & { href: string };

export default INav;
