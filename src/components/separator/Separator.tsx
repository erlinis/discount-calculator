import { clsx } from 'clsx';
import { ComponentPropsWithoutRef } from 'react';

export type SeparatorProps = ComponentPropsWithoutRef<'hr'>;

export function Separator({ className, ...props }: SeparatorProps) {
  return (
    <hr
      className={clsx('border-t border-dashed border-gray-light', className)}
      {...props}
    />
  );
}

Separator.displayName = 'Separator';
