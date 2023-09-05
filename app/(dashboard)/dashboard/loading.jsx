import { PageWrapper } from '@/components/wrapper';

import { Skeleton } from '@/components/ui/skeleton';
import { TableSkeleton } from '@/components/ui/table-skeleton';

const Loading = () => {
  return (
    <PageWrapper className="">
      <div className="flex items-center justify-between mb-4">
        <div className="space-y-2">
          <Skeleton className="w-[150px] h-6 rounded-none" />
          <Skeleton className="w-[230px] h-6 rounded-none" />
        </div>
        <Skeleton className="w-[130px] h-9" />
      </div>
      <Skeleton className="w-full h-[513px] rounded-lg" />
      <div className="my-4">
        <TableSkeleton />
      </div>
    </PageWrapper>
  );
};

export default Loading;
