import { AnchorHTMLAttributes, BaseHTMLAttributes } from "react";

interface ILink extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
}

export default ILink;