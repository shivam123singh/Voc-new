'use client';
import Image from "next/image";
import EmptyDoc from "../../assets/icons/empty-doc.svg";
import { Button } from "../ui/button";
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "../ui/dialog";


const TableEmptyComp = ({ messageTitle, messageSubtitle, ctaName, handleClick  }) => (
    <div className="w-1/2 text-center mx-auto">            
        <Image src={EmptyDoc} alt="empty document" className="mx-auto" />
        <p className="font-medium text-lg mt-6">{messageTitle}</p>
        <p className="text-sm font-light px-6">{messageSubtitle}</p>
        <Dialog>
          <DialogTrigger asChild>
          <Button className="font-light px-8 mt-6" onClick={handleClick}>{ctaName}</Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Create Survey</DialogTitle>
            </DialogHeader>
            <DialogFooter>
              <Button type="submit" className="mt-8 w-full h-[55px]">
                Next
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
    </div>
);

export default TableEmptyComp;