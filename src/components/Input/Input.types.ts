import { InputHTMLAttributes } from "react";
import TRounded from "../../types/TRounded";
import TVariant from "../../types/TVariants";

export type OInputElements =
  | "alt"
  | "formaction"
  | "formenctype"
  | "formmethod"
  | "formnovalidate"
  | "formtarget"
  | "height"
  | "popovertarget"
  | "popovertargetaction"
  | "src"
  | "type"
  | "width"
  | "size";

export type TInput =
  | "text"
  | "color"
  | "date"
  | "datetime-local"
  | "email"
  | "file"
  | "hidden"
  | "month"
  | "number"
  | "password"
  | "search"
  | "tel"
  | "time"
  | "url"
  | "week"
  | "textarea";

interface IInput
  extends Omit<InputHTMLAttributes<HTMLInputElement>, OInputElements> {
  type?: TInput;
  className?: string;
  variant?: TVariant;
  label?: string;
  size?: "sm" | "md" | "lg";
  status?: "danger" | "warning" | "success";
  rounded?: TRounded;
}

export default IInput;
