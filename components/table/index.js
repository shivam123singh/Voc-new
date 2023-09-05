import * as React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Button } from '../ui/button';
import { getCoreRowModel, getPaginationRowModel, useReactTable } from '@tanstack/react-table';
import { Download } from 'lucide-react';

const TableFormat = ({ title, tableHead, tableData, accessors, hasPagination, headerClassName, hasExport, handleClickRow }) => {
  const table = useReactTable({
    data: tableData,
    column: tableHead,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });
  
  return (
    <>
        <div>
          <div className='flex justify-between mb-6'>
            <h2 className="font-bold text-base">{title || ''}</h2>
            {hasExport && (
              <button className='flex font-normal text-[13px] items-center'>
                <Download size={16} />
                <p className='ml-1'>Export</p>
              </button>
            )}
          </div>
          <Table className="rounded-lg px-4 py-2 bg-white">
            <TableHeader>
              <TableRow>
                {tableHead.map((head) => (
                  <TableHead
                    className={`${head.width} text-grey700 font-medium ${headerClassName} overflow-hidden whitespace-nowrap text-ellipsis`}
                    key={head.title}
                  >
                    {head.title}
                  </TableHead>
                ))}
              </TableRow>
            </TableHeader>
            <TableBody>
              {tableData.map((data) => (
                <TableRow key={data.id + Date.now()}>
                  {accessors.map((accessor) => {
                    const tData = data[accessor.accessor] || '--';
                    return (
                      <TableCell className="font-light text-textdark" key={data.id + accessor.accessor} onClick={handleClickRow}>
                        {tData}
                      </TableCell>
                    );
                  })}
                </TableRow>
              ))}
            </TableBody>
          </Table>

          {hasPagination && (
              <div className="flex items-center justify-end space-x-2 py-4">
            <Button
              variant="outline"
              size="sm"
              onClick={() => table.previousPage()}
              disabled={!table.getCanPreviousPage()}
            >
              Previous
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => table.nextPage()}
              disabled={!table.getCanNextPage()}
            >
              Next
            </Button>
          </div>
          )}
        </div>
    </>
  );
};

export default TableFormat;