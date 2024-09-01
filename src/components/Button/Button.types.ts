import { ButtonHTMLAttributes, ReactNode } from "react";

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: TButtonVariant;
  size?: 'small' | 'medium' | 'large';
  className?: string;
}

type TButtonVariant = 'primary' | 'secondary' | 'tertiary' | 'dark' | 'light' | 'default' | 'success' | 'danger' | 'warning';

export default IButton;