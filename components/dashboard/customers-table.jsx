/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import React, { useMemo } from "react";
import TableFormat from "../table";
import Options from "@/assets/icons/options-icon.svg";
import { customerTableConfig } from "@/config/table-config";
import Image from "next/image";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "../ui/dialog";
import AddAgentForm from "../forms/add-agent-form";

const CustomersTable = ({ ...props }) => {
  const tableData = useMemo(
    () =>
      props.tData?.map((data) => ({
        id: data["id"],
        name: data["name"],
        email: data["email"],
        phone_number: (
          <div className="flex items-center justify-between">
            <p>{data["phone_number"]}</p>
            <Dialog>
              <DialogTrigger asChild>
                <button className="px-4">
                  <Image src={Options} alt="options" />
                </button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle>Add Agent</DialogTitle>
                </DialogHeader>
                <AddAgentForm selectedAgent={data} />
              </DialogContent>
            </Dialog>
          </div>
        ),
      })),
    [props.tData]
  );

  return (
    <div className="w-full">
      <TableFormat
        title={props.tableTitle || ""}
        tableHead={customerTableConfig.head || []}
        tableData={tableData || []}
        accessors={customerTableConfig.accessor}
        handleOnclick={props.handleCreateSurvey}
      />
    </div>
  );
};

export default CustomersTable;
