import { FC } from "react";
import ICard from "./Card.types";
import "./card.styles.scss";

const Card: FC<ICard> & { container: FC<ICard> } = ({ children, variant, className, testId, ...props }) => {
  return (
    <div className={`card card--${variant} ${className ?? className}`} {...props}>
      {children}
    </div>
  );
};

const CardContainer: FC<ICard> = ({ children, variant }) => {
  return <div className={`card__container card__container--${variant}`}>{children}</div>;
};

Card.container = CardContainer;

export default Card;
