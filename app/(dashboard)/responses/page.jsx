'use client';

import Link from 'next/link';
import DataTable from '@/components/data-table';
import { Status } from '@/components/ui/status';

import { responseTableConfig } from '@/config/table-config';
import { RESPONSES_URL } from '@/config/paths';



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
    accessorKey: 'total_responses',
    header: 'Total responses',
  },
  {
    accessorKey: 'last_responses',
    header: 'Last Response',
  },

  {
    accessorKey: 'status',
    header: 'Status',
    cell: ({ row }) => {
      const status = row.getValue('status');
      return (
        <Link href={`${RESPONSES_URL}/${row.id}`}>
          <Status status={status} />
        </Link>
      );
    },
  },
];

const Responses = () => {
  return <DataTable columns={columns} data={responseTableConfig.data} />;
};

export default Responses;
