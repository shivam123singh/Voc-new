import { customerTableConfig } from "@/config/table-config";
import CustomersTable from "@/components/dashboard/customers-table";
import DownloadIcon from "@/assets/icons/download-icon.svg";
import Image from "next/image";

const Audience = () => {
  return (
    <>
      {customerTableConfig.data.length !== 0 && (
        <div className="flex items-center justify-between mb-4 w-full">
          <h1 className="text-sm">
            Customers <span className="text-grey-400 ml-1">23,456</span>
          </h1>
          <button className="flex items-center text-[13px]">
            <Image src={DownloadIcon} alt="download" />
            <p className="font-light ml-1">Export</p>
          </button>
        </div>
      )}
      <CustomersTable tData={customerTableConfig.data || []} />
    </>
  );
};

export default Audience;
