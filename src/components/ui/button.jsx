import * as React from "react";
import { cn } from "../../lib/utils";

const buttonVariants = {
  variant: {
    default: "bg-brand-primary text-white hover:bg-brand-dark",
    ghost: "hover:bg-brand-bg text-brand-primary",
    outline: "border-2 border-brand-primary text-brand-primary hover:bg-brand-bg",
  },
  size: {
    default: "h-12 px-4 py-2",
    lg: "h-12 px-6 py-3",
    icon: "h-10 w-10",
  },
};

const Button = React.forwardRef(({ 
  className, 
  variant = "default", 
  size = "default",
  children,
  ...props 
}, ref) => {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center rounded-full transition-all duration-200",
        "focus:outline-none focus:ring-2 focus:ring-brand-primary focus:ring-offset-2",
        buttonVariants.variant[variant],
        buttonVariants.size[size],
        className
      )}
      ref={ref}
      {...props}
    >
      {children}
    </button>
  );
});

Button.displayName = "Button";

export { Button, buttonVariants };