'use client';

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Status } from '@/components/ui/status';

import SurveySummary from './summary';

export const columns = [
  {
    accessorKey: 'survey_name',
    header: 'Survey Name',
  },
  {
    accessorKey: 'feedback_from',
    header: 'Feedback From',
  },
  {
    accessorKey: 'last_modified',
    header: 'Last modified',
  },
  {
    accessorKey: 'modified_by',
    header: 'Modified by',
  },

  {
    accessorKey: 'status',
    header: 'Status',
    cell: ({ row }) => {
      const status = row.getValue('status');
      return (
        <Dialog>
          <DialogTrigger asChild>
            <Status status={status} />
          </DialogTrigger>
          <DialogContent className="max-w-[320px]">
            <DialogHeader>
              <DialogTitle className="font-medium">Survey Summary</DialogTitle>
            </DialogHeader>
            <SurveySummary />
          </DialogContent>
        </Dialog>
      );
    },
  },
];
