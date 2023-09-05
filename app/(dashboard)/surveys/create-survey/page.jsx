"use client";

import { useContext, useState } from 'react';
import { redirect } from 'next/navigation';
import { v4 as uuidv4 } from 'uuid';

import { SurveyContext } from "@/context/survey-context";

import { ElementBlock } from "./element-block";
import {
  RadioElement,
  CheckboxElement,
  ShortTextElement,
  ParagraphElement,
  EmailElement,
  PhoneElement,
  TimeElement,
  DateElement,
  FileElement,
  SectionElement,
  TitleElement,
  SubitleElement,
} from "./elements";

import { PageWrapper } from "@/components/wrapper";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import SendAndCollectResponseForm from "@/components/forms/create-survey/send-collect-response";

import { surveysConfig } from "@/config/surveys";
import { cn } from "@/lib/utils";

const initialFieldState = {
  question: "Question",
  required: false,
  min: null,
  max: null,
};
const CreateSurvey = () => {
  const [activeEl, setActiveEl] = useState(null);
  const [selectedElements, setSelectedElements] = useState([]);
  const { survey, setSurveyHandler } = useContext(SurveyContext);

  if (!survey) redirect("/surveys");

  const elements = {
    0: ShortTextElement,
    1: ParagraphElement,
    2: RadioElement,
    3: CheckboxElement,
    4: EmailElement,
    5: PhoneElement,
    7: FileElement,
    8: TimeElement,
    9: DateElement,
    10: SectionElement,
    13: TitleElement,
    14: SubitleElement,
  };

  const handleOptionChange = (value) => {
    const newSelectedEl = {
      id: `element-${uuidv4()}`,
      type: value,
      ...initialFieldState,
    };
    setActiveEl(newSelectedEl);
    setSelectedElements((prevSelectedElements) => [
      ...prevSelectedElements,
      newSelectedEl,
    ]);
  };

  const handleFormSubmit = () => {
    setSurveyHandler((prevInfo) => {
      return {
        ...prevInfo,
        Questions: selectedElements.map((el, index) => ({
          Question: el.question,
          IsRequired: el.required,
          Max: el.max,
          Min: el.min,
          Line: index + 1,
          FieldType: el.type,
          List: el.options,
        })),
      };
    });
  };

  return (
    <PageWrapper>
      <h3 className="font-bold text-xl capitalize">{survey.SurveyName}</h3>
      <p className="font-light text-grey100 text-[13px] mb-6">
        {survey.SurveyDescription}
      </p>

      <div className="grid grid-cols-12">
        <div
          className={cn(
            `col-span-7 xl:col-span-8 h-full ${
              selectedElements.length > 0 && "bg-white"
            } p-3`
          )}
        >
          {/* INPUTS ELEMENT BLOCK */}
          {selectedElements
            .slice()
            .reverse()
            .map((el) => (
              <ElementBlock
                key={el.id}
                id={el.id}
                activeEl={activeEl}
                setActiveEl={setActiveEl}
                setSelectedElements={setSelectedElements}
                elementIndex={selectedElements.findIndex(
                  (item) => item.id === el.id
                )}
                element={elements[el.type]}
                selectedElements={selectedElements}
              />
            ))}
          {selectedElements.length > 0 && (
            <Dialog>
              <DialogTrigger asChild>
                <Button
                  onClick={handleFormSubmit}
                  className="mt-8 w-60 text-sm font-normal"
                >
                  Create a survey
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[384px]">
                <DialogHeader>
                  <DialogTitle className="font-medium">
                    Send and collect responses
                  </DialogTitle>
                </DialogHeader>

                <SendAndCollectResponseForm />
              </DialogContent>
            </Dialog>
          )}
        </div>
        <div className="fixed right-8 w-[400px] xl:w-[450px] h-auto rounded-xl bg-[#F4F7F9] p-4">
          <ul className="grid grid-cols-12 gap-2">
            {surveysConfig.inputList.map((element) => (
              <li
                key={element.value}
                className={cn(
                  `col-span-3 flex items-center justify-center h-20 ${
                    activeEl?.type === element.value
                      ? 'bg-blue text-white'
                      : 'bg-white text-blue'
                  } rounded-lg cursor-pointer select-none transition-all duration-500`
                )}
                onClick={() => handleOptionChange(element.value)}
              >
                <div className="flex flex-col items-center gap-1">
                  {element.icon}
                  <span className=" text-[11px]">{element.label}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </PageWrapper>
  );
};
export default CreateSurvey;
