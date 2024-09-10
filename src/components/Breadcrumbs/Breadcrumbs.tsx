import { FC } from "react";
import IBreadcrumbs from "./Breadcrumbs.types";
import "./breadcrumbs.styles.scss";

const Breadcrumbs: FC<IBreadcrumbs> = ({
  list,
  separator,
  variant = "default",
  className,
  testId,
}) => {
  const buildPath = (index: number) => {
    return list.slice(0, index + 1).join("/");
  };

  const handleNavigation = (e: any, path: string) => {
    e.preventDefault();
    window.history.pushState({}, "", `/${path}`);
  };

  return (
    <nav className={className} data-testid={testId}>
      <ol className="breadcrumbs">
        {list.map((breadcrumb, index) => {
          const path = buildPath(index);

          return (
            <li key={`breadcrumb-${index}`} className={`breadcrumbs`}>
              <a
                className={`breadcrumbs__link breadcrumbs--${variant}`}
                onClick={(e) => handleNavigation(e, path)}
              >
                {breadcrumb}
              </a>
              {index < list.length - 1 && (
                <span className={`breadcrumbs__link breadcrumbs--${variant}`}>
                  {separator}
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
