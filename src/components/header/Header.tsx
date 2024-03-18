import { clsx } from "clsx";
import { ComponentPropsWithoutRef } from "react";
import styles from "./header.module.css";

export type HeaderProps = ComponentPropsWithoutRef<"header">;

export function Header({ children, className, ...props }: HeaderProps) {
  return (
    <header className={clsx(className, styles.header)} {...props}>
      {children}
    </header>
  );
}

Header.displayName = "Header";

export type HeaderItemProps = {
  position: "start" | "center" | "end";
} & ComponentPropsWithoutRef<"div">;

export function HeaderItem({
  children,
  className,
  position,
  ...props
}: HeaderItemProps) {
  return (
    <div
      className={clsx(className, styles.item, {
        "col-start-1 justify-start": position === "start",
        "col-start-2 justify-center": position === "center",
        "col-start-3 justify-end": position === "end",
      })}
      {...props}
    >
      {children}
    </div>
  );
}

HeaderItem.displayName = "HeaderItem";
