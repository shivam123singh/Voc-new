'use client';

import { useState } from 'react';
import { format } from 'date-fns';
import { Trash2, Plus, Calendar as CalendarIcon, Upload } from 'lucide-react';

import { useOptionGroup } from '@/hooks';

import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { Separator } from '@/components/ui/separator';

import { cn } from '@/lib/utils';

const ElementWrapper = ({
  className,
  id,
  isFormActive,
  elements,
  elementIndex,
  onAdd,
  onDelete,
  children,
}) => {
  return (
    <div className="flex items-center gap-2">
      <div
        className={cn(
          `flex items-center space-x-4 ${
            isFormActive && 'bg-white'
          } min-w-[342px] p-2 rounded-sm select-none`,
          className
        )}
      >
        {children}
      </div>
      {elementIndex === elements?.length - 1 && isFormActive && (
        <div className="flex space-x-2 text-[#666666]">
          {elementIndex < 4 && <Plus onClick={onAdd} size={16} />}
          {elementIndex > 0 && (
            <Trash2 onClick={() => onDelete(id)} size={16} />
          )}
        </div>
      )}
    </div>
  );
};

const RadioElement = ({
  selectedElements,
  elementIndex,
  setSelectedElements,
  isFormActive,
}) => {
  const { options, handleOptionChange, handleOptionAdd, handleOptionDelete } =
    useOptionGroup([], selectedElements, elementIndex, setSelectedElements);
  
  return (
    <RadioGroup defaultValue={options[0]?.id}>
      {options.map((option, index) => (
        <ElementWrapper
          key={option.id}
          id={option.id}
          isFormActive={isFormActive}
          elements={options}
          elementIndex={index}
          onAdd={handleOptionAdd}
          onDelete={handleOptionDelete}
        >
          <RadioGroupItem value={option.label} id={option.id} />
          <Label htmlFor={option.id}>
            <Input
              onChange={(e) => handleOptionChange(e, index)}
              className="border-none h-full p-0"
              value={option.label}
            />
          </Label>
        </ElementWrapper>
      ))}
    </RadioGroup>
  );
};
const CheckboxElement = ({
  selectedElements,
  elementIndex,
  setSelectedElements,
  isFormActive,
}) => {
  const {
    options: checkboxes,
    handleOptionChange,
    handleOptionAdd: handleCheckboxAdd,
    handleOptionDelete: handleCheckboxDelete,
  } = useOptionGroup([], selectedElements, elementIndex, setSelectedElements);

  return (
    <div className="flex flex-col space-y-2 max-h-[150px] overflow-auto">
      {checkboxes.map((checkbox, index) => (
        <ElementWrapper
          key={checkbox.id}
          id={checkbox.id}
          isFormActive={isFormActive}
          elements={checkboxes}
          elementIndex={index}
          onAdd={handleCheckboxAdd}
          onDelete={handleCheckboxDelete}
        >
          <Checkbox id={checkbox.id} />
          <Label htmlFor={checkbox.id} className="text-[13px] text-[#444]">
            <Input
              onChange={(e) => handleOptionChange(e, index)}
              className="border-none h-full p-0"
              value={checkbox.label}
            />
          </Label>
        </ElementWrapper>
      ))}
    </div>
  );
};

const ShortTextElement = ({ isFormActive, onChange }) => {
  return (
    <ElementWrapper className="p-0 " isFormActive={isFormActive}>
      <Input
        onChange={onChange}
        className="border-none h-full placeholder:text-[#888888] placeholder:text-[13px] font-normal"
        placeholder="Short answer"
      />
    </ElementWrapper>
  );
};
const ParagraphElement = ({ isFormActive }) => {
  return (
    <ElementWrapper className="p-0 w-full" isFormActive={isFormActive}>
      <Textarea
        className="border-none placeholder:text-[#888888] placeholder:text-[13px] font-normal"
        placeholder="Long answer"
      />
    </ElementWrapper>
  );
};

const EmailElement = ({ isFormActive }) => {
  return (
    <ElementWrapper className="p-0" isFormActive={isFormActive}>
      <Input
        type="email"
        className="border-none h-full placeholder:text-[#888888] placeholder:text-[13px] font-normal"
        placeholder="Short answer"
      />
    </ElementWrapper>
  );
};
const PhoneElement = ({ isFormActive }) => {
  return (
    <ElementWrapper className="p-0" isFormActive={isFormActive}>
      <Input
        type="text"
        className="border-none h-full placeholder:text-[#888888] placeholder:text-[13px] font-normal"
        placeholder="Short answer"
      />
    </ElementWrapper>
  );
};

const TimeElement = ({ isFormActive }) => {
  return (
    <ElementWrapper className="p-0" isFormActive={isFormActive}>
      <Input
        type="time-"
        className="border-none h-full placeholder:text-[#888888] placeholder:text-[13px] font-normal"
        placeholder="MM:YY"
      />
    </ElementWrapper>
  );
};

const DateElement = ({ isFormActive }) => {
  const [date, setDate] = useState();

  return (
    <ElementWrapper className="p-0" isFormActive={isFormActive}>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant={'ghost'}
            className={cn(
              'w-full justify-start text-left font-normal hover:bg-transparent ',
              !date && 'text-muted-foreground'
            )}
          >
            <CalendarIcon className="mr-2 h-4 w-4" />
            {date ? format(date, 'PPP') : <span>Pick a date</span>}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0">
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            initialFocus
          />
        </PopoverContent>
      </Popover>
    </ElementWrapper>
  );
};

const SectionElement = ({ isFormActive }) => {
  return (
    <ElementWrapper isFormActive={isFormActive}>
      <Separator />
    </ElementWrapper>
  );
};
const TitleElement = ({ isFormActive }) => {
  return (
    <ElementWrapper isFormActive={isFormActive}>
      <Input
        className="border-none h-0"
        type="text"
        defaultValue="Add Section"
      />
    </ElementWrapper>
  );
};
const SubitleElement = ({ isFormActive }) => {
  return (
    <ElementWrapper isFormActive={isFormActive}>
      <Input
        className="border-none h-0"
        type="text"
        defaultValue="Add Section"
      />
    </ElementWrapper>
  );
};
const FileElement = () => {
  return (
    <label className="relative flex items-center justify-center border border-dashed border-[#28668B] min-h-[58px] p-8 rounded-md bg-transparent">
      <div className="flex space-x-2 text-[#333]">
        <Upload size={16} />
        <span className="font-normal text-sm">
          Drag and drop to upload file
        </span>
      </div>

      <Input
        type="file"
        className="absolute h-full inset-0 cursor-pointer opacity-0"
        accept=".jpg, .jpeg, .png, .pdf"
      />
    </label>
  );
};

export {
  RadioElement,
  CheckboxElement,
  ShortTextElement,
  ParagraphElement,
  EmailElement,
  PhoneElement,
  TimeElement,
  DateElement,
  TitleElement,
  SectionElement,
  SubitleElement,
  FileElement,
};
