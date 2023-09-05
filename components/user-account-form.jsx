'use client';

import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';

import { userAccountSchema } from '@/lib/validations/dashboard';
import { Input } from '@/components/ui/input-old';
import { Button } from '@/components/ui/button';

const UserAccountForm = ({ className, ...props }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(userAccountSchema),
  });

  async function onSubmit(data) {
    console.log(data);
  }
  return (
    <div className={className} {...props}>
      <span className="block font-bold mb-5">Edit account details</span>
      <form className="flex flex-col gap-6 w-full" onSubmit={handleSubmit(onSubmit)}>
        <Input
          className="placeholder:font-normal"
          label="First name"
          id="first_name"
          placeholder="Enter your first name"
          type="text"
          autoCapitalize="none"
          autoComplete="off"
          autoCorrect="off"
          size="lg"
          invalid={errors?.first_name}
          {...register('first_name')}
        />
        {errors?.first_name && (
          <p className="px-1 text-xs text-red-600">
            {errors.first_name.message}
          </p>
        )}
        <Input
          className="placeholder:font-normal"
          label="Last name"
          id="last_name"
          placeholder="Enter your last name"
          type="text"
          autoCapitalize="none"
          autoComplete="off"
          autoCorrect="off"
          size="lg"
          invalid={errors?.last_name}
          {...register('last_name')}
        />
        {errors?.last_name && (
          <p className="px-1 text-xs text-red-600">
            {errors.last_name.message}
          </p>
        )}
        <Input
          className="placeholder:font-normal"
          label="Email"
          id="email"
          placeholder="yourname@mtn.com"
          type="email"
          autoCapitalize="none"
          autoComplete="email"
          autoCorrect="off"
          size="lg"
          invalid={errors?.email}
          {...register('email')}
        />
        {errors?.email && (
          <p className="px-1 text-xs text-red-600">{errors.email.message}</p>
        )}
        <Input
          className="placeholder:font-normal"
          label="Phone number"
          id="phone_number"
          placeholder="Enter your phone number"
          type="text"
          autoCapitalize="none"
          autoComplete="off"
          autoCorrect="off"
          size="lg"
          invalid={errors?.phone_number}
          {...register('phone_number')}
        />
        {errors?.phone_number && (
          <p className="px-1 text-xs text-red-600">
            {errors.phone_number.message}
          </p>
        )}

        <div className="flex gap-5 mt-5 md:flex-row flex-col-reverse">
          <Button
            className="basis-1/2 font-normal py-3"
            type="button"
            variant="outline"
            size="lg"
            onClick={() => reset()}
          >
            Cancel
          </Button>
          <Button className="basis-1/2 font-normal py-3" size="lg">
            Save changes
          </Button>
        </div>
      </form>
    </div>
  );
};

export default UserAccountForm;