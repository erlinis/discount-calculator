import { clsx } from 'clsx';
import { ComponentPropsWithoutRef, forwardRef } from 'react';
import styles from './forms.module.css';

export type TextInputProps = {
  type?: 'email' | 'number' | 'search' | 'tel' | 'text' | 'url';
} & Omit<ComponentPropsWithoutRef<'input'>, 'type'>;

export const TextInput = forwardRef<HTMLInputElement, TextInputProps>(
  function TextInput({ className, ...props }: TextInputProps, ref) {
    return (
      <input
        ref={ref}
        className={clsx(className, styles.textInput)}
        {...props}
      />
    );
  }
);

TextInput.displayName = 'TextInput';
