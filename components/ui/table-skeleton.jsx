import { Skeleton } from './skeleton';

import { cn } from '@/lib/utils';

const TableSkeleton = ({ className }) => {
  return (
    <div className={cn('w-full', className)}>
      <Skeleton className="h-12 rounded-none" />
      <>
        {Array(5)
          .fill(null)
          .map((_, index) => (
            <div key={index} className="flex gap-x-4 w-full">
              {Array(5)
                .fill(null)
                .map((_, index) => (
                  <Skeleton
                    key={index}
                    className="w-full h-5 rounded-none m-2"
                  />
                ))}
            </div>
          ))}
      </>
    </div>
  );
};

export { TableSkeleton };
