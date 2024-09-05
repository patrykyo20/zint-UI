import { ButtonHTMLAttributes, ReactNode } from "react";
import TVariant from "../../types/TVariants";

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: TVariant;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export default IButton;