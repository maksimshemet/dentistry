import * as React from "react";
import { cn } from "../../lib/utils";

const BUTTON_STYLES = {
  base: "inline-flex items-center justify-center rounded-full transition-all duration-200",
  focus: "focus:outline-none focus:ring-2 focus:ring-brand-primary focus:ring-offset-2",
  disabled: "disabled:opacity-50 disabled:cursor-not-allowed",
  loading: "cursor-wait",
  variants: {
    default: "bg-brand-primary text-white hover:bg-brand-dark",
    ghost: "hover:bg-brand-bg text-brand-primary",
    outline: "border-2 border-brand-primary text-brand-primary hover:bg-brand-bg"
  },
  sizes: {
    default: "h-12 px-4 py-2",
    lg: "h-12 px-6 py-3",
    icon: "h-10 w-10"
  }
}

const Spinner = () => (
  <span className="absolute inset-0 flex items-center justify-center">
    <svg
      className="animate-spin h-5 w-5"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="4"
      />
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
      />
    </svg>
  </span>
)

const ButtonContent = ({ children, icon, isLoading }) => (
  <span className={cn("flex items-center gap-2", isLoading && "invisible")}>
    {icon?.left}
    {children}
    {icon?.right}
  </span>
)

const Button = React.forwardRef(({
  className,
  variant = "default",
  size = "default",
  isLoading = false,
  icon,
  children,
  disabled,
  ...props
}, ref) => (
  <button
    className={cn(
      BUTTON_STYLES.base,
      BUTTON_STYLES.focus,
      BUTTON_STYLES.disabled,
      BUTTON_STYLES.variants[variant],
      BUTTON_STYLES.sizes[size],
      isLoading && BUTTON_STYLES.loading,
      className
    )}
    ref={ref}
    disabled={disabled || isLoading}
    {...props}
  >
    {isLoading && <Spinner />}
    <ButtonContent icon={icon} isLoading={isLoading}>
      {children}
    </ButtonContent>
  </button>
))

Button.displayName = "Button"

export { Button }