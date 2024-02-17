import { Slot } from '@radix-ui/react-slot';
import { clsx } from 'clsx';
import { forwardRef, type ComponentPropsWithoutRef } from 'react';
import styles from './button.module.css';

export type ButtonProps = {
  asChild?: boolean;
  block?: boolean;
} & ComponentPropsWithoutRef<'button'>;

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  function Button(
    { children, className, block = true, asChild, ...props },
    ref
  ) {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp
        ref={ref}
        className={clsx(className, styles.btn, {
          'w-full': block,
        })}
        {...props}
      >
        {children}
      </Comp>
    );
  }
);

Button.displayName = 'Button';
