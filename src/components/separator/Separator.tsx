import { clsx } from 'clsx';
import { ComponentPropsWithoutRef } from 'react';
import styles from './separator.module.css';

export type SeparatorProps = ComponentPropsWithoutRef<'hr'>;

export function Separator({ className, ...props }: SeparatorProps) {
  return <hr className={clsx(styles.separator, className)} {...props} />;
}

Separator.displayName = 'Separator';

export function SeparatorRound({ className, ...props }: SeparatorProps) {
  return (
    <Separator
      className={clsx(styles['separator-round'], className)}
      {...props}
    />
  );
}
