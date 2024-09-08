import { TextareaHTMLAttributes } from "react";
import IBasic from "../../types/IBasic";
import TVariant from "../../types/TVariants";
import TRounded from "../../types/TRounded";

interface ITextarea extends TextareaHTMLAttributes<HTMLTextAreaElement>, IBasic {
  variant?: TVariant;
  label?: string;
  size?: "sm" | "md" | "lg";
  rounded?: TRounded;
}


export default ITextarea;
