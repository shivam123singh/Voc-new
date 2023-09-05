/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import React, { useMemo, useState } from "react";
import TableFormat from "../../table";
import { audienceTableConfig } from "@/config/table-config";
import CreateAudienceForm from "../../forms/create-audience-form";
import AudienceSpreadSheetUploadSuccess from "../../audience-spreadsheet-upload-success";
import UploadSpreadsheet from "../../upload-spreadsheet";
import Image from "next/image";
import { useRouter } from 'next/navigation';
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../../ui/dialog";
import { Button } from "../../ui/button";
import EmptyDoc from "@/assets/icons/empty-doc.svg";
import { handleSwitchView } from "./views";
import { AUDIENCE_URL } from "@/config/paths";

const AudienceTable = ({ ...props }) => {
  const router = useRouter();
  const [stage, setStage] = useState({
    stage: 1,
    title: "Create audience",
    hasSkip: false,
    headerPosition: "text-left",
    size: "sm:max-w-[425px]",
  });

  const tableData = useMemo(
    () =>
      props.tData?.map((data) => ({
        id: data["id"],
        audience: data["audience"],
        no_of_respondents: data["no_of_respondents"],
      })),
    [props.tData]
  );

  return (
    <div className="w-full">
      {tableData && tableData.length === 0 ? (
        <div className="lg:w-1/2 text-center mx-auto mt-24">
          <Image src={EmptyDoc} alt="empty document" className="mx-auto" />
          <p className="font-medium text-lg mt-6">
            You don’t have any audiences
          </p>
          <p className="text-sm font-light px-8">
            Your respondents will be added as audiences. Or you can create an
            audience for use later.
          </p>
          <Dialog>
            <DialogTrigger asChild>
              <Button className="font-light px-8 mt-6">Create audience</Button>
            </DialogTrigger>
            <DialogContent className={stage.size}>
              <DialogHeader>
                <DialogTitle className={stage.headerPosition}>
                  {stage.title}
                </DialogTitle>
              </DialogHeader>
              {handleSwitchView({
                UploadSpreadsheet,
                AudienceSpreadSheetUploadSuccess,
                CreateAudienceForm,
                stage,
                setStage,
              })}

              {stage.hasSkip && (
                <DialogFooter>
                  <Button
                    variant="outline"
                    type="submit"
                    className="w-full h-[55px] font-normal"
                    onClick={() =>
                      setStage({
                        stage: 3,
                        title: "Bulk upload contacts to your list",
                        hasSkip: false,
                        headerPosition: "text-center",
                        size: "sm:max-w-[600px]",
                      })
                    }
                  >
                    Skip
                  </Button>
                </DialogFooter>
              )}
            </DialogContent>
          </Dialog>
        </div>
      ) : (
        <TableFormat
          title='Audiences'
          tableHead={audienceTableConfig.head || []}
          accessors={audienceTableConfig.accessors}
          tableData={tableData || []}
          hasExport
          handleClickRow={() => router.push(`${AUDIENCE_URL}/3`)}
        />
      )}
    </div>
  );
};

export default AudienceTable;