import * as React from 'react';

import { cn } from '@/lib/utils';

import FormGroup from './form-group';
import { Label } from './label';

export const inputConfig = {
  //Sizes
  xs: 'px-2 h-6',
  sm: 'px-3 h-8',
  md: 'px-4 h-10',
  lg: 'px-4 h-16',
};

const Input = React.forwardRef(
  (
    {
      className,
      id,
      label,
      size = 'md',
      variant = 'outlined',
      invalid,
      inputProps,
      type,
      ...props
    },
    ref
  ) => {
    return (
      <div className="full">
        <Label className="text-secondary-300" htmlFor={id}>
          {label}
        </Label>
        <FormGroup>
          {inputProps?.startAdornment}
          <input
            type={type}
            className={cn(
              'w-full font-light text-secondary-500 overflow-visible rounded-lg select-none  placeholder:text-secondary-500 placeholder:font-medium placeholder:text-sm transition ease-in-out duration-200',
              size && inputConfig[size],
              inputProps?.startAdornment ? 'pl-14' : 'pr-14',
              {
                'focus:border-primary bg-transparent focus:outline-none':
                  variant === 'outlined' || variant === 'filled',
                'outline-none': variant === 'flushed' || variant === 'unstyled',
                'border hover:border-gray-300': variant === 'outlined',
                'bg-gray-100 shadow hover:bg-gray-200 focus:bg-transparent focus:shadow-none':
                  variant === 'filled',
                'border-b px-0 rounded-none focus:border-b-2 focus:border-primary':
                  variant === 'flushed',
                'rounded-none': variant === 'unstyled',
              },
              invalid &&
                'border-destructive focus:border-destuctive outline-destructive hover:border-destructive',
              className
            )}
            ref={ref}
            {...props}
          />
          {inputProps?.endAdornment}
        </FormGroup>
      </div>
    );
  }
);
Input.displayName = 'Input';

export { Input };
