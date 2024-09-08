import { ButtonHTMLAttributes, ReactNode } from "react";
import TVariant from "../../types/TVariants";
import IBasic from "../../types/IBasic";

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement>, IBasic {
  children: ReactNode;
  variant?: TVariant;
  size?: 'sm' | 'md' | 'lg';
}

export default IButton;