import { ButtonHTMLAttributes, ReactNode } from "react";
import TVariant from "../../types/TVariants";
import IBasic from "../../types/IBasic";
import TRounded from "../../types/TRounded";

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement>, IBasic {
  children: ReactNode;
  variant?: TVariant;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  rounded?: TRounded;
}

export default IButton;