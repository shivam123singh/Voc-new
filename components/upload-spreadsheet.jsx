/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import { Button } from "@/components/ui/button";
import TableFormat from "./table";
import { audienceSpreadsheetTableConfig } from "@/config/table-config";
import { useMemo } from "react";
import { ChevronRight } from "lucide-react";

const UploadSpreadsheet = ({ ...props }) => {

  const tableData = useMemo(
    () =>
      audienceSpreadsheetTableConfig.data?.map((data) => ({
        id: data['id'],
        name: data['name'],
        email: data['email'],
        phone_number: data['phone_number']
      })),
    [audienceSpreadsheetTableConfig.data]
  );

  const submitForm = (data) => {
    console.log(data);
  };

  return (
    <div>
      <p className="text-[12px] text-center px-24">
        Upload a spreadsheet with the columns formatted in the following order;{" "}
        <span className="font-medium">“Name”, “Email”, “Phone number”</span>
      </p>

      <div className="mt-4 rounded-lg border border-100">
        <TableFormat
          title={props.tableTitle || ""}
          tableHead={audienceSpreadsheetTableConfig.head || []}
          tableData={tableData}
          accessors={audienceSpreadsheetTableConfig.accessor}
          headerClassName="bg-green-50 text-dark-800"
        />
      </div>
      <div className="flex justify-between items-center">
        <Button
          type="submit"
          className="mt-8 h-[55px] font-normal px-6"
          onClick={props.handleUpload}
        >
          Uplaod spreadsheet
        </Button>
        <Button
          type="submit"
          variant="outline"
          className="mt-8 w- h-[55px] font-normal flex px-6"
          onClick={() => alert('upload')}
        >
          Or add individiually
          <ChevronRight />
        </Button>
      </div>
    </div>
  );
};

export default UploadSpreadsheet;
