import * as React from 'react';

import { useFormField } from './form';
import { cn } from '@/lib/utils';

const Textarea = React.forwardRef(({ className, error, ...props }, ref) => {
  // const { error } = useFormField();
  return (
    <textarea
      className={cn(
        'flex min-h-[80px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm focus-visible:outline-none focus:border-primary disabled:cursor-not-allowed disabled:opacity-50 font-normal placeholder:text-secondary-500',
        error && 'border-destructive focus:border-destructive',
        className
      )}
      ref={ref}
      {...props}
    />
  );
});
Textarea.displayName = 'Textarea';

export { Textarea };
