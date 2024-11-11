import * as React from "react";
import { cn } from "../../lib/utils";

const Alert = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    role="alert"
    className={cn(
      "rounded-lg border p-4",
      className
    )}
    {...props}
  />
));
Alert.displayName = "Alert";

export { Alert };