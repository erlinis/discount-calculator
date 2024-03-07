import { Slot } from '@radix-ui/react-slot'
import { clsx } from 'clsx'
import { forwardRef, type ComponentPropsWithoutRef } from 'react'

export type ButtonProps = {
  asChild?: boolean
  block?: boolean
  variant?: 'primary'
  shape?: 'rounded' | 'square' | 'brand'
} & ComponentPropsWithoutRef<'button'>

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  { children, className, block = true, shape = 'rounded', variant = 'primary', asChild, ...props },
  ref
) {
  const Comp = asChild ? Slot : 'button'
  return (
    <Comp
      ref={ref}
      className={clsx(className, buttonClasses, {
        'w-full': block,
        'aspect-square h-4 rounded-xl rounded-tr-none p-2': shape === 'brand',
        'aspect-square h-4 rounded-lg p-2': shape === 'square',
        'rounded-full': shape === 'rounded',
        [primaryButtonClasses]: variant === 'primary',
      })}
      {...props}
    >
      {children}
    </Comp>
  )
})

Button.displayName = 'Button'

const buttonClasses =
  clsx(`py-1 px-5 rounded-xl font-bold shadow-md focus:outline-none focus:ring focus:ring-opacity-75 inline-flex items-center
    justify-center align-middle
    active:ring-2
    active:ring-opacity-75`)

const primaryButtonClasses = clsx(`bg-primary text-white
  hover:bg-primary-700
  focus:ring-primary-400
  active:bg-primary-800
  active:ring-primary-900`)
