import IBasic from "../../types/IBasic";
import TVariant from "../../types/TVariants";

interface IBreadcrumbs extends IBasic {
  list: string[];
  separator: string;
  variant?: TVariant;
}


export default IBreadcrumbs;