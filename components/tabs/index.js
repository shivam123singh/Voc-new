import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import Image from "next/image";
import CopyLinkIcon from "../../assets/icons/link-icon.svg";
import CopyCodeIcon from "../../assets/icons/code-copy-icon.svg";
import { Button } from "../ui/button";

const TabFormat = () => {
    return (
        <Tabs defaultValue="link" className="">
        <TabsList className="grid grid-cols-2 w-fit bg-white">
          <TabsTrigger value="link" className="data-[state=active]:border-b-4 border-navyblue w-fit">
            <Image src={CopyLinkIcon} alt="link-copy" />
          </TabsTrigger>
          <TabsTrigger value="code" className="data-[state=active]:border-b-4 border-navyblue w-fit">
            <Image src={CopyCodeIcon} alt="link-copy" />
          </TabsTrigger>
        </TabsList>
        <TabsContent value="link">
           <div className="border border-grey- p-6 w-full -mt-3">
            <h2 className="text-grey-100 text-sm">Link to survey</h2>
            <p className="break-words bg-dark-100 p-3 text-xs mt-1 rounded leading-[150%] min-h-[130px]">
                https://forms.office.com/Pages/ResponsePage.aspxid=UMu5yUQ2tE2iZ_qE3y9M6-2bA9UBaWZPvnIxRxnJp1UOE1CNUVVOVc5WFdTNFRCSTNHWlQ5SVZMMi4u
            </p>
           <Button className="text-sm font-normal mt-4 px-4 py-2 mb-7">Copy link</Button>
           </div>
        </TabsContent>
        <TabsContent value="code">
        <div className="border border-grey- p-6 w-full -mt-3">
            <h2 className="text-grey-100 text-sm">Code to survey</h2>
            <p className="break-words bg-dark-100 p-3 text-xs mt-1 rounded leading-[150%] min-h-[130px]">
                https://forms.office.com/Pages/ResponsePage.aspxid=UMu5yUQ2tE2iZ_qE3y9M6-2bA9UBaWZPvnIxRxnJp1UOE1CNUVVOVc5WFdTNFRCSTNHWlQ5SVZMMi4u
            </p>
           <Button className="text-sm font-normal mt-4 px-4 py-2 mb-7">Copy code</Button>
           </div>
        </TabsContent>
      </Tabs>
    )
};

export default TabFormat;