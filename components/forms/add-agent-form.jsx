"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input-old";
import { AddAgentSchema } from "@/lib/validations/dashboard";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

const AddAgentForm = ({ ...props }) => {
  const { 
    handleSubmit,
    formState: { errors },
    register,
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(AddAgentSchema),
    defaultValues: {
      name: props.selectedAgent?.name,
      email: props.selectedAgent?.email,
      phone: props.selectedAgent?.phone_number,
    }
  });

  const submitForm = (data) => {
    console.log(data);
  };

  return (
      <form onSubmit={handleSubmit(submitForm)} className="mt-3">
        <div className="flex flex-col gap-6">
          <Input
            label="Name of agent"
            id="name"
            className="placeholder:text-dark-700 text-sm placeholder:font-light"
            placeholder="Name of agent"
            type="text"
            autoCapitalize="none"
            autoCorrect="on"
            disabled
            size="lg"
            invalid={errors && errors?.name}
            {...register("name", { required: true })}
          />
          <Input
            label="Agent email address"
            id="name"
            className="placeholder:text-dark-700 text-sm placeholder:font-light"
            placeholder="Agent email address"
            type="email"
            autoCapitalize="none"
            autoCorrect="on"
            size="lg"
            disabled
            invalid={errors && errors?.name}
            {...register("email", { required: true })}
          />
          <Input
            label="Agent phone number"
            id="phone"
            className="placeholder:text-dark-700 text-sm placeholder:font-light"
            placeholder="Agent phone number"
            type="text"
            autoCapitalize="none"
            autoCorrect="on"
            size="lg"
            disabled
            invalid={errors && errors?.name}
            {...register("phone", { required: true })}
          />
        </div>
        <Button type="submit" className="mt-8 w-full h-[55px]">
          Send invite
        </Button>
      </form>
  );
};

export default AddAgentForm;
