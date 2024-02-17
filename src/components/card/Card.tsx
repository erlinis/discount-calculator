import { clsx } from 'clsx';
import { ComponentPropsWithoutRef } from 'react';
import styles from './card.module.css';

export type CardProps = { brand?: boolean } & ComponentPropsWithoutRef<'div'>;

export function Card({ children, className, brand, ...props }: CardProps) {
  return (
    <article
      className={clsx(styles.card, className, {
        'rounded-tr-none': brand,
      })}
      {...props}
    >
      {children}
    </article>
  );
}

Card.displayName = 'Card';

export type CardHeaderProps = ComponentPropsWithoutRef<'div'>;

export function CardBody({ children, className, ...props }: CardHeaderProps) {
  return (
    <div className={clsx(styles.body, className)} {...props}>
      {children}
    </div>
  );
}

CardBody.displayName = 'CardBody';
