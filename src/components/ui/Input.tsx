import { tv, type VariantProps } from "tailwind-variants";
import cn from "../../utils/cn";

interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof input> {}

const input = tv({
  base: "p-1.5",
  variants: {
    variant: {
      primary: "",
      secondary: "",
    },
  },
});
export default function Input({ className, variant, ...props }: InputProps) {
  return (
    <input
      type="text"
      className={cn(input({ variant }), className)}
      {...props}
    />
  );
}