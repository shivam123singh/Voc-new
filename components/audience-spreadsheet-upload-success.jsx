import Image from "next/image";
import BulkUploadIcon from "@/assets/icons/bulk-upload.svg";
import { Button } from "./ui/button";

const AudienceSpreadSheetUploadSuccess = () => (
  <div className="w-full ">
    <Image src={BulkUploadIcon} alt="bulk upload icon" className="mx-auto" />
    <div className="mx-auto text-center px-6">
        <h1 className="mt-8 mb-4 text-[28px]">Audience added</h1>
        <p className="">
        You have successfully added{" "}
        <span className="font-medium">335 people</span> to{" "}
        <span className="font-medium">Customers</span> audience
        </p>
        <Button
        type="submit"
        className="mt-8 h-[55px] font-normal px-6 w-full"
        onClick={() => alert("upload")}
        >
        View audience
        </Button>
    </div>
  </div>
);

export default AudienceSpreadSheetUploadSuccess;
