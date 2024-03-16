import { Slot } from "@radix-ui/react-slot";
import { clsx } from "clsx";
import { forwardRef, type ComponentPropsWithoutRef } from "react";
import { twMerge } from "tailwind-merge";

export type ButtonProps = {
  asChild?: boolean;
  block?: boolean;
  variant?: "primary" | "secondary" | "link" | "none";
  shape?: "rounded" | "square" | "brand" | "none";
} & ComponentPropsWithoutRef<"button">;

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  function Button(
    {
      children,
      className,
      block = true,
      shape = "none",
      variant = "primary",
      asChild,
      ...props
    },
    ref
  ) {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        ref={ref}
        className={twMerge(
          clsx(
            buttonClasses,
            {
              "w-full": block,
              "aspect-square rounded-xl p-2 rounded-tr-none": shape === "brand",
              "aspect-square rounded-lg p-2": shape === "square",
              "rounded-full": shape === "rounded",
              [primaryButtonClasses]: variant === "primary",
              [secondaryButtonClasses]: variant === "secondary",
            },
            variant === "none" ? noneButtonClasses : "",
            variant === "link" ? linkButtonClasses : "",
            className
          )
        )}
        {...props}
      >
        {children}
      </Comp>
    );
  }
);

Button.displayName = "Button";

const buttonClasses = clsx(
  "justify-center align-middle py-1 px-3 font-bold shadow-md focus:outline-none focus:ring focus:ring-opacity-75 inline-flex items-center active:ring-2 active:ring-opacity-75"
);

const primaryButtonClasses = clsx(
  "bg-primary text-white hover:bg-primary-700 focus:ring-primary-400 active:bg-primary-800 active:ring-primary-900"
);

const linkButtonClasses = clsx(
  "bg-none shadow-none hover:text-primary-700 focus:text-primary-400 active:text-primary-800"
);

const noneButtonClasses = clsx(
  "bg-none shadow-none hover:text-primary-700 focus:text-primary-400 active:text-primary-800"
);

const secondaryButtonClasses = clsx(
  "bg-gray-light text-white hover:bg-primary-700 focus:ring-primary-400 active:bg-primary-800 active:ring-primary-900"
);
