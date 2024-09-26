import { BaseHTMLAttributes, ReactNode } from "react";
import IBasic from "../../types/IBasic";

interface ICard extends BaseHTMLAttributes<HTMLDivElement>, IBasic {
  children: ReactNode;
  variant?: 'vertical' | 'horizontal' | 'product' | 'pricing';
}

export default ICard;