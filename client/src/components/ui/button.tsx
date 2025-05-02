import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all duration-300 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-[var(--cinnamon-satin)] text-[var(--white)] hover:shadow-md hover:translate-y-[-2px]",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-[var(--charcoal)] bg-[var(--white)] text-[var(--gunmetal)] dark:bg-[var(--charcoal)] dark:text-[var(--white)] dark:border-[var(--white_a12)] hover:bg-[var(--white)] hover:text-[var(--cinnamon-satin)] dark:hover:bg-[var(--gunmetal)] dark:hover:text-[var(--cinnamon-satin)] hover:shadow-md",
        secondary:
          "bg-[var(--cultured)] text-[var(--gunmetal)] dark:bg-[var(--gunmetal)] dark:text-[var(--white)] hover:bg-[var(--snow)] hover:text-[var(--cinnamon-satin)] dark:hover:bg-[var(--raisin-black)] dark:hover:text-[var(--cinnamon-satin)]",
        ghost: "text-[var(--gunmetal)] dark:text-[var(--white)] hover:bg-[var(--white_a12)] hover:text-[var(--cinnamon-satin)]",
        link: "text-[var(--cinnamon-satin)] underline-offset-4 hover:underline",
      },
      size: {
        default: "h-11 px-6 py-3 rounded-[var(--radius-6)]",
        sm: "h-10 px-4 py-2 rounded-[var(--radius-6)]",
        lg: "h-12 px-8 py-3 rounded-[var(--radius-8)]",
        icon: "h-11 w-11 rounded-[var(--radius-8)]",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
