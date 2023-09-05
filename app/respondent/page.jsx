"use client";

import { Button } from "@/components/ui/button";
import { ElementBlock } from "./element-block";

import {
  CheckboxElement,
  DateResponseElement,
  EmailResponseElement,
  FileResponseElement,
  ParagraphElement,
  RadioElement,
  ScaleResponseElement,
  ShortResponseElement,
  TimeResponseElement,
} from "./element";
import { surveyElements } from "@/config/surveys";
import { useRouter } from "next/navigation";
import { RESPONDENT_SUCCESS_URL } from "@/config/paths";

const UserRespondent = () => {
  const router = useRouter();
  const elements = {
    0: ShortResponseElement,
    1: ParagraphElement,
    2: RadioElement,
    3: CheckboxElement,
    4: EmailResponseElement,
    7: FileResponseElement,
    8: TimeResponseElement,
    9: DateResponseElement,
    11: ScaleResponseElement
  };

  return (
    <div className="p-4 bg-[#F5F5F5]">
      <main>
        <h1 className="text-xl font-medium">MTN 5G User Survey</h1>
        <p className="text-grey-700 font-normal">
          User satisfaction survey for the MTN 5G service
        </p>
      </main>

      {surveyElements.elements.map((el) => (
        <ElementBlock
          type={el.type}
          sn={el.id}
          question={el.question}
          options={el.location}
          element={elements[el.type]}
        />
      ))}
      <Button className="mt-8 w-full" size="lg" onClick={() => router.push(RESPONDENT_SUCCESS_URL)}>
        Submit response
      </Button>
    </div>
  );
};

export default UserRespondent;
