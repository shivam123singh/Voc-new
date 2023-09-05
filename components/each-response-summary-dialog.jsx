import Image from 'next/image';

import ExcelIcon from '@/assets/icons/excel-icon.svg';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from './ui/dialog';

const EachResponseSummaryDialog = ({ setShowDialog, showDialog }) => {
  return (
    <Dialog open={showDialog}>
      <DialogContent
        className="sm:max-w-[40vw]"
        handleClose={() => setShowDialog(false)}
      >
        <DialogHeader>
          <DialogTitle className="text-[13px] text-gray-500 font-medium flex justify-between -mb-6">
            <div className="flex items-center">
              <p>S/N</p>
              <div className="flex px-6 items-center">
                <p className="">What is your name</p>
                <p className="text-xs font-light ml-2">34,580 responses</p>
              </div>
            </div>
            <button className="flex items-center">
              <p className="">Download as excel</p>
              <Image src={ExcelIcon} alt="excel icon" className="ml-2" />
            </button>
          </DialogTitle>
        </DialogHeader>
        <div className="grid w-full">
          <div className="h-[0.5px] bg-[#C7D0D7] my-5" />
          <div className="flex items-center text-xs font-normal">
            <p className="">1. </p>
            <p className="px-7">Jon Snow</p>
          </div>

          <div className="h-[0.5px] bg-[#C7D0D7] my-5" />
          <div className="flex items-center text-xs font-normal">
            <p className="">2. </p>
            <p className="px-7">Jon Snow</p>
          </div>

          <div className="h-[0.5px] bg-[#C7D0D7] my-5" />
          <div className="flex items-center text-xs font-normal">
            <p className="">3. </p>
            <p className="px-7">Jon Snow</p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default EachResponseSummaryDialog;
