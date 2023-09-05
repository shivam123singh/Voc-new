import Image from 'next/image';
import EmptyDoc from '@/assets/icons/empty-doc.svg';

import { cn } from '@/lib/utils';
import { Icons } from '@/components/icons';

export function EmptyPlaceholder({ className, children, ...props }) {
  return (
    <div
      className={cn(
        'flex min-h-[400px] flex-col items-center justify-center rounded-md p-8 text-center animate-in fade-in-50',
        className
      )}
      {...props}
    >
      <div className="mx-auto flex max-w-[420px] flex-col items-center justify-center text-center">
        {children}
      </div>
    </div>
  );
}

EmptyPlaceholder.Icon = function EmptyPlaceHolderIcon({
  name,
  className,
  ...props
}) {
  let Icon = Icons[name];

  if (!Icon && name === 'documents')
    return (
      <Image
        src={EmptyDoc}
        width={200}
        height={176.667}
        alt="empty document"
        className="mx-auto"
      />
    );

  if (!Icon) {
    return null;
  }

  return (
    <div className="flex h-20 w-20 items-center justify-center rounded-full bg-muted">
      <Icon className={cn('h-10 w-10', className)} {...props} />
    </div>
  );
};

EmptyPlaceholder.Title = function EmptyPlaceholderTitle({
  className,
  ...props
}) {
  return <h2 className={cn('font-medium text-lg mt-6', className)} {...props} />;
};

EmptyPlaceholder.Description = function EmptyPlaceholderDescription({
  className,
  ...props
}) {
  return (
    <p
      className={cn('mb-6 text-center text-sm leading-6 text-[#444]', className)}
      {...props}
    />
  );
};
