import clsx from 'clsx';
import { ComponentPropsWithoutRef, forwardRef } from 'react';
import styles from './icon.module.css';

export type IconNames =
  | 'bin'
  | 'check'
  | 'chevron-right'
  | 'chevron-left'
  | 'edit'
  | 'plus'
  | 'store'
  | 'units'
  | 'weigth';

export type IconProps = ComponentPropsWithoutRef<'svg'> & {
  iconName: IconNames;
};

export const Icon = forwardRef<SVGSVGElement, IconProps>(function Icon(
  { iconName, className, ...props }: IconProps,
  ref
) {
  return (
    // biome-ignore lint/a11y/noSvgWithoutTitle: <explanation>
    <svg ref={ref} className={clsx(styles.icon, className)} {...props}>
      <use href={`/sprite.svg#icon-${iconName}`} />
    </svg>
  );
});

Icon.displayName = 'Icon';
