import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";
import { Upload } from "lucide-react";
import { DateElement } from "@/app/(dashboard)/surveys/create-survey/elements";
import { useState } from "react";
import { surveyElements } from "@/config/surveys";

export const RadioElement = ({ options }) => (
  <RadioGroup className="mt-4 ml-6">
    {options.map((option) => (
      <div className="flex items-center space-x-2 py-2" key={option}>
        <RadioGroupItem value={option} id={option} />
        <Label htmlFor={option}>{option}</Label>
      </div>
    ))}
  </RadioGroup>
);

export const CheckboxElement = ({ options }) => (
  <>
    {options.map((option) => (
      <div className="flex items-center space-x-2 py-4" key={option}>
        <Checkbox id={option} className="ml-6" />
        <Label htmlFor={option}>{option}</Label>
      </div>
    ))}
  </>
);

export const ShortResponseElement = () => (
  <>
    <Input
      type="text"
      placeholder="Short answer"
      className="mt-3 border-none placeholder:text-grey-50"
    />
  </>
);

export const ParagraphElement = () => (
  <Textarea
    type="text"
    placeholder="Short answer"
    className="mt-3 border-none placeholder:text-grey-50"
  />
);

export const EmailResponseElement = () => (
  <Input
    type="email"
    placeholder="Short answer"
    className="mt-3 border-none placeholder:text-grey-50"
  />
);

export const TimeResponseElement = () => (
  <Input
    type="time"
    className="mt-3 border-none placeholder:text-grey-50 w-[25vw]"
    placeholder="HH:MM"
  />
);

export const DateResponseElement = () => <DateElement />;

export const FileResponseElement = () => (
  <label className="relative flex items-center justify-center border border-dashed border-[#28668B] min-h-[58px] p-8 rounded-md bg-[#28668B1A]">
    <div className="flex space-x-2 text-[#333]">
      <Upload size={16} />
      <span className="font-normal text-sm">Drag and drop to upload file</span>
    </div>
    <Input
      type="file"
      className="absolute h-full inset-0 cursor-pointer opacity-0"
      accept=".jpg, .jpeg, .png, .pdf"
    />
  </label>
);

export const ScaleResponseElement = () => {
  const [active, setActive] = useState(null);

  return (
  <div className="flex mt-3 w-full flex-wrap">
    {surveyElements.scales.map((scale) => (
      <div className={`rounded-sm drop-shadow-sm px-6 py-2 trans ${active === scale ? 'bg-navyblue text-white' : 'bg-white text-[#888]'} mt-2 mr-2 cursor-pointer`} key={scale} onClick={() => setActive(scale)}>{scale}</div>
    ))}
  </div>
);
    };