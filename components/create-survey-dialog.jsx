import CreateSurveyForm from '@/components/create-survey-form';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

import { Button } from '@/components/ui/button';

import { cn } from '@/lib/utils';

export const CreateSurveyDialog = ({ btnSize = 'lg' }) => (
  <Dialog>
    <DialogTrigger asChild>
      <Button
        className={cn(`${btnSize === 'sm' && 'w-full font-normal text-sm overflow-hidden whitespace-nowrap text-ellipsis'}`)}
        size={btnSize}
      >
        Create a survey
      </Button>
    </DialogTrigger>
    <DialogContent className="sm:max-w-[425px]">
      <DialogHeader>
        <DialogTitle>Create Survey</DialogTitle>
      </DialogHeader>
      <CreateSurveyForm />
    </DialogContent>
  </Dialog>
);
