import Image from 'next/image';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

import { eachResponse } from '@/config/dashoard';

import ExcelIcon from '@/assets/icons/excel-icon.svg';
import ArrowRIght from '@/assets/icons/arrow-right.svg';

const ResponseDetail = () => (
  <div className="pt-2 pb-8">
    <div className="flex w-full justify-center">
      <div className="w-[55vw]">
        <h1 className="font-medium text-[20px]">MTN 5G User Survey</h1>
        <p className="text-[13px] text-grey-700">
          User satisfaction survey for the MTN 5G service
        </p>

        <div className="bg-[#f8f8f8] rounded flex justify-center my-7 mb-3">
          <div className="text-center px-2 py-6">
            <p className="text-[17px] font-medium">2,434,588</p>
            <p className="text-[11px] text-grey-700">RESPONSES</p>
          </div>
        </div>

        <div className="mt-6">
          <div className="flex justify-between items-cneter">
            <h2 className="text-xl font-medium">Summary</h2>
            <div className="flex items-center">
              <Image src={ExcelIcon} alt="excel-icon" />
              <p className="ml-1 text-xs font-light">Open in Excel</p>
            </div>
          </div>

          <div className="h-[0.5px] my-4 bg-[#C7D0D7]" />

          {eachResponse.map((each) => (
            <div key={each.id} className="mt-4">
              <p className="text-[13px]">{`${each.id}. ${each.title}`}</p>
              <div className="h-[0.5px] my-4 bg-[#C7D0D7]" />

              <div className="mt-7 flex items-center justify-between">
                <div>
                  <h2 className="text-2xl">{each.total}</h2>
                  <p className="text-[11px] text-grey-700 font-light mt-1">
                    RESPONSES
                  </p>
                </div>
                <Dialog>
                  <DialogTrigger asChild>
                    <button className="flex items-center">
                      <p className="mr-2 text-[13px]">View responses</p>
                      <Image src={ArrowRIght} alt="arrow" />
                    </button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[40vw]">
                    <DialogHeader>
                      <DialogTitle className="text-[13px] text-gray-500 font-medium flex justify-between -mb-6 mt-4 ">
                        <div className="flex items-center">
                          <p>S/N</p>
                          <div className="flex px-6 items-center">
                            <p className="">What is your name</p>
                            <p className="text-xs font-light ml-2">
                              34,580 responses
                            </p>
                          </div>
                        </div>
                        <button className="flex items-center">
                          <p className="">Download as excel</p>
                          <Image
                            src={ExcelIcon}
                            alt="excel icon"
                            className="ml-2"
                          />
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
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default ResponseDetail;
