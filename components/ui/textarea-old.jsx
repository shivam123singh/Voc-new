import * as React from "react";

import { Label } from "./label";
import { cn } from "@/lib/utils";

const Textarea = React.forwardRef(({ className, ...props }, ref) => {
  return (
    <div>
      <Label
        htmlFor={props.name}
        className="text-sm -mb-2 text-grey-100 font-normal"
      >
        {props.label || ""}
      </Label>
      <textarea
        className={cn(
          "flex min-h-[113px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 font-light placeholder:text-dark-700",
          className
        )}
        ref={ref}
        {...props}
      />
    </div>
  );
});
Textarea.displayName = "Textarea";

export { Textarea };
