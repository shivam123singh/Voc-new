"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input-old";
import { Textarea } from "@/components/ui/textarea-old";
import { createAudienceFormSchema } from "@/lib/validations/dashboard";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

const CreateAudienceForm = ({ ...props }) => {
  const {
    handleSubmit,
    formState: { errors },
    register,
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(createAudienceFormSchema),
    delayError: 1000,
  });

  const submitForm = (data) => {
    console.log(data);
    props.handleNext();
  };

  return (
    <div>
      <form onSubmit={handleSubmit(submitForm)}>
        <div className="flex flex-col gap-6">
          <Input
            label="Name of audience"
            id="name_of_audience"
            className="placeholder:text-dark-700 text-sm placeholder:font-light"
            placeholder="What will you call this audience?"
            type="text"
            autoCapitalize="none"
            autoCorrect="on"
            size="lg"
            invalid={errors && errors?.name_of_audience}
            {...register("name_of_audience", { required: true })}
          />
          <Textarea
            label="Audience description"
            id="audience_description"
            placeholder="Describe this audience"
            type="text"
            autoCapitalize="none"
            autoCorrect="on"
            size="lg"
            invalid={errors && errors?.name_of_audience}
            {...register("audience_description", { required: true })}
          />
        </div>
        <Button type="submit" className="mt-8 w-full h-[55px]">
          Next
        </Button>
      </form>
    </div>
  );
};

export default CreateAudienceForm;
