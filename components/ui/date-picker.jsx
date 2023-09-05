'use client';

import { forwardRef } from 'react';
import { format } from 'date-fns';
import { Calendar as CalendarIcon } from 'lucide-react';

import { cva } from 'class-variance-authority';

import { useFormField } from './form';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';

const inputVariants = cva(
  'w-full justify-start text-left text-sm text-secondary-500 font-normal',
  {
    variants: {
      size: {
        default: 'h-16',
        sm: 'h-10',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

export const DatePicker = forwardRef(
  ({ className, size, date, mode, ...props }, ref) => {
    const { error } = useFormField();
    return (
      <div className={cn('grid gap-2', className)}>
        <Popover>
          <PopoverTrigger asChild>
            <Button
              id="date"
              variant={!error ? 'outline' : 'destructive-outline'}
              className={cn(
                inputVariants(!date && 'text-muted-foreground', size)
              )}
            >
              <CalendarIcon className="mr-4 h-4 w-4" />
              {mode === 'single' ? (
                date ? (
                  format(date, 'PPP')
                ) : (
                  <span>Pick a date</span>
                )
              ) : date?.from ? (
                date.to ? (
                  <>
                    {format(date.from, 'LLL dd, y')} -{' '}
                    {format(date.to, 'LLL dd, y')}
                  </>
                ) : (
                  format(date.from, 'LLL dd, y')
                )
              ) : (
                <span>Pick a date</span>
              )}
            </Button>
          </PopoverTrigger>
          <PopoverContent
            className="w-auto p-0"
            align={mode === 'range' ? 'start' : undefined}
          >
            <Calendar initialFocus mode={mode} {...props} ref={ref} />
          </PopoverContent>
        </Popover>
      </div>
    );
  }
);
