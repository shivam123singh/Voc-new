import { Button } from '@/components/ui/button';
import { classNames } from '@/lib/utils';
import DisableIcon from '@/assets/icons/disable-icon.svg';
import EditIcon from '@/assets/icons/edit.svg';
import Image from 'next/image';

const SurveySummary = () => {
  const summaryInfo = [
    {
      key: 'Language',
      resp: 'English',
    },
    {
      key: 'Audience',
      resp: 'Customer',
    },
    {
      key: 'Created on',
      resp: 'Jul 17, 2023 08:47 AM',
    },
    {
      key: 'Created by',
      resp: 'chibuzor.akujobi@mtn.com',
      hasEmail: true,
    },
    {
      key: 'Last modified',
      resp: 'Jul 17, 2023 08:47 AM',
    },
    {
      key: 'Modified by',
      resp: 'chibuzor.akujobi@mtn.com',
      hasEmail: true,
    },
    {
      key: 'Status',
      resp: 'active',
    },
  ];
  return (
    <div>
      <h1 className="font-medium text-[17px]">MTN 5G User Survey</h1>
      <p className="text-[13px] text-grey-700">
        User satisfaction survey for the MTN 5G service
      </p>
      <div className="bg-dark-100 rounded flex justify-center mt-7 mb-3">
        <div className="text-center px-2 py-3">
          <p className="text-[17px] font-medium">2,434,588</p>
          <p className="text-[11px] text-grey-700">RESPONSES</p>
        </div>
      </div>
      <div>
        {summaryInfo.map((info) => (
          <div className="flex text-xs py-3 items-center" key={info.key}>
            <p className={`w-[40%] text-grey-700`}>{info.key}</p>
            <p
              className={classNames(
                `${
                  info.key === 'Status' ? 'w-fit ml-4 font-medium' : 'w-[60%]'
                } whitespace-nowrap text-ellipsis px-4 py-[5px] rounded`,
                info.resp === 'active' && 'text-green bg-green-100',
                info.resp === 'inactive' && 'text-dark bg-dark-100',
                info.resp === 'draft' && 'text-navyblue bg-navyblue-100',
                info.hasEmail ? 'lowercase' : 'capitalize'
              )}
            >
              {info.resp}
            </p>
          </div>
        ))}
      </div>

      <div className="flex mt-4 whitespace-nowrap text-ellipsis text-xs w-full justify-between">
        <Button
          className="flex items-center font-normal px-6"
          variant="outline"
        >
          <Image src={DisableIcon} alt="Disable link" />
          <p className="ml-1">Disable link</p>
        </Button>
        <Button className="flex items-center font-normal ml-4 px-6">
          <Image src={EditIcon} alt="Edit survey" />
          <p className="ml-1">Edit survey</p>
        </Button>
      </div>
    </div>
  );
};

export default SurveySummary;
