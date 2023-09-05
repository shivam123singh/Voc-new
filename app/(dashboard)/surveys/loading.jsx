import { PageWrapper } from '@/components/wrapper';

import { Skeleton } from '@/components/ui/skeleton';
import { TableSkeleton } from '@/components/ui/table-skeleton';

const Loading = () => {
  return (
    <PageWrapper>
      <div className="flex items-center justify-end mb-8">
        <Skeleton className="w-[130px] h-9" />
      </div>
      <TableSkeleton className="bg-white" />
    </PageWrapper>
  );
};

export default Loading;
