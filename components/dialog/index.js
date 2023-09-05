
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"

const DialogFormat = ({ children, showDialog, dialogTitle, alertDesc, setShowDialog, width, closeIcon, titleClassName, response, description }) => {
    return (
            <Dialog open={showDialog}>
            <DialogContent className={`${width || 'sm:max-w-[425px]'}`} handleClose={() => setShowDialog(false)}>
                <DialogHeader>
                    <div className="flex justify-between items-center">
                        <DialogTitle className={titleClassName}>{dialogTitle || ''}</DialogTitle>
                    </div>
                    <DialogDescription>{alertDesc || ''}</DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4 w-full">
                    {children}
                </div>
            </DialogContent>
        </Dialog>
    );
};

export default DialogFormat;