import { cn } from '@/lib/utils';

const Status = ({ status, ...props }) => (
  <div
    className={cn(
      'flex items-center px-4 py-[5px] w-fit rounded capitalize font-medium cursor-pointer',
      status === 'active' && 'text-green bg-green-100',
      status === 'inactive' && 'text-dark bg-[#F5F5F5]',
      status === 'draft' && 'text-navyblue bg-navyblue-100'
    )}
    {...props}
  >
    {status}
  </div>
);

export { Status };
