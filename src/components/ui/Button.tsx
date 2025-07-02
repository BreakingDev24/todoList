import type React from "react";
import cn from "../../utils/cn";
import { type VariantProps, tv } from "tailwind-variants";

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof button> {}

const button = tv({
  base: "cursor-pointer px-2 py-1 text-lg font-bold",
  variants: {
    variant: {
      primary: "border-b border-gray-400",
      secondary: "rounded-sm border border-gray-400",
    },
  },
});
export default function Button({
  className,
  children,
  variant,

  ...props
}: ButtonProps) {
  return (
    <button className={cn(button({ variant }), className)} {...props}>
      {children}
    </button>
  );
}
