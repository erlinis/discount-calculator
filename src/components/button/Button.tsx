import { Slot } from '@radix-ui/react-slot';
import { clsx } from 'clsx';
import { forwardRef, type ComponentPropsWithoutRef } from 'react';
import styles from './button.module.css';

export type ButtonProps = {
  asChild?: boolean;
  block?: boolean;
  variant?: 'primary';
  shape?: 'rounded' | 'square' | 'brand';
} & ComponentPropsWithoutRef<'button'>;

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  function Button(
    {
      children,
      className,
      block = true,
      shape = 'rounded',
      variant = 'primary',
      asChild,
      ...props
    },
    ref
  ) {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp
        ref={ref}
        className={clsx(className, styles.btn, {
          'w-full': block,
          'aspect-square h-4 rounded-xl rounded-tr-none p-2': shape === 'brand',
          'aspect-square h-4 rounded-lg p-2': shape === 'square',
          'rounded-full': shape === 'rounded',
          [styles['btn-primary']]: variant === 'primary',
        })}
        {...props}
      >
        {children}
      </Comp>
    );
  }
);

Button.displayName = 'Button';
