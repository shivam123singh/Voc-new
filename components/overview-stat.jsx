import { ArrowUpCircle } from 'lucide-react';
import { cva } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const statVariants = cva('text-[13px] text-[#444] leading-5', {
  variants: {
    fontWeight: {
      default: 'font-normal',
      medium: 'font-medium',
    },
    defaultVariants: {
      fontWeight: 'default',
    },
  },
});

export const Stat = ({
  className,
  fontWeight,
  title,
  value,
  increase,
  iconColor,
}) => {
  const colors = {
    survey: 'bg-[#7D6508]',
    people: 'bg-[#FFCB06]',
  };
  return (
    <div className="flex flex-col gap-1">
      <div className="flex items-center gap-1">
        {!!iconColor && (
          <div className={`w-2 h-2 rounded-full ${colors[iconColor]}`}></div>
        )}
        <span className={cn(statVariants({ className, fontWeight }))}>
          {title}
        </span>
      </div>
      <div className="flex gap-2">
        <span className="text-xl lg:text-2xl text-[#222]">
          {value}
          {increase && '%'}
        </span>
        {increase && (
          <div className="flex gap-1">
            <ArrowUpCircle size={16} color="#20B552" />
            <span className="block -mt-1 font-medium text-[#20B552]">25%</span>
          </div>
        )}
      </div>
    </div>
  );
};
