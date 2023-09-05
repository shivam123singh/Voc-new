'use client';

import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input-old';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Button } from '@/components/ui/button';

import { createUserSchema } from '@/lib/validations/dashboard';
import { cn } from '@/lib/utils';

const InputField = ({
  inputKey,
  type,
  label,
  placeholder,
  errors,
  register,
}) => {
  return (
    <div>
      <Input
        id={inputKey}
        label={label}
        placeholder={placeholder}
        type={type}
        autoCapitalize="none"
        autoComplete="none"
        autoCorrect="off"
        invalid={errors && errors[inputKey]}
        size="lg"
        {...register(`${inputKey}`)}
      />
      {errors && errors[inputKey] && (
        <p className="px-1 text-sm text-red-600">{errors[inputKey].message}</p>
      )}
    </div>
  );
};

const CreateUserForm = ({ className, ...props }) => {
  const form = useForm({
    resolver: yupResolver(createUserSchema),
  });

  async function onSubmit(data) {
    console.log(data);
  }
  return (
    <div className={cn('max-w-[60%] mx-auto', className)} {...props}>
      <div className="font-bold mb-5">
        <span>Add an admin user</span>
        <p className="font-normal text-sm text-grey-200">
          Enter email address to invite user
        </p>
      </div>

      <Form {...form}>
        <form
          className="flex flex-col gap-6"
          onSubmit={form.handleSubmit(onSubmit)}
        >
          <InputField
            inputKey="first_name"
            type="text"
            label="First Name"
            placeholder="Enter your first name"
            register={form.register}
            errors={form.formState.errors}
          />
          <InputField
            inputKey="last_name"
            type="text"
            label="Last Name"
            placeholder="Enter your last name"
            register={form.register}
            errors={form.formState.errors}
          />
          <InputField
            inputKey="email"
            type="email"
            label="Email"
            placeholder="tomholland@mtn.com"
            register={form.register}
            errors={form.formState.errors}
          />

          <FormField
            control={form.control}
            name="role"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Role</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger className="h-16">
                      <SelectValue placeholder="Select a role" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="m@example.com">m@example.com</SelectItem>
                    <SelectItem value="m@google.com">m@google.com</SelectItem>
                    <SelectItem value="m@support.com">m@support.com</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="flex gap-5 mt-5">
            <Button
              className="basis-1/2 font-normal"
              type="button"
              variant="outline"
              size="lg"
              onClick={() => form.reset()}
            >
              Cancel
            </Button>
            <Button className="basis-1/2 font-normal" size="lg">
              Invite user
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default CreateUserForm;
