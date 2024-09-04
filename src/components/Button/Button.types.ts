import { ButtonHTMLAttributes, ReactNode } from "react";
import TVariant from "../../types/TVariants";

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: TVariant;
  size?: 'small' | 'medium' | 'large';
  className?: string;
}

export default IButton;