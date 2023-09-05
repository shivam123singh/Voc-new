'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { Eye, EyeOff, Loader2 } from 'lucide-react';

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import FormGroup from './ui/form-group';
import { Input } from '@/components/ui/input';
import InputAdornment from '@/components/ui/input-adornment';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';

import { DASHBOARD_URL } from '@/config/paths';
import { userAuthSchema } from '@/lib/validations/auth';

const UserAuthForm = () => {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const form = useForm({ resolver: yupResolver(userAuthSchema) });

  const togglePasswordVisibility = () => setShowPassword((prev) => !prev);

  const onSubmit = (data) => {
    console.log(data);
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      router.push(DASHBOARD_URL);
    }, 1000);
  };
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="email"
          render={({ field, fieldState }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input
                  autoComplete="email"
                  autoCorrect="off"
                  autoCapitalize="none"
                  placeholder="yourname@mtn.com"
                  invalid={fieldState.invalid}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field, fieldState }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <FormGroup>
                  <Input
                    type={showPassword ? 'text' : 'password'}
                    autoCapitalize="none"
                    autoComplete="none"
                    autoCorrect="off"
                    placeholder="******"
                    invalid={fieldState.invalid}
                    {...field}
                  />
                  <InputAdornment
                    adornment={showPassword ? <EyeOff /> : <Eye />}
                    onClick={togglePasswordVisibility}
                    position="end"
                  ></InputAdornment>
                </FormGroup>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="remember"
          render={({ field }) => (
            <FormItem className="flex items-center space-x-2">
              <FormControl>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>
              <FormLabel className="text-secondary-500 font-normal leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                Remember me
              </FormLabel>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          type="submit"
          disabled={loading}
          size="lg"
          className="w-full font-medium"
        >
          {loading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Please wait
            </>
          ) : (
            'Login'
          )}
        </Button>
      </form>
    </Form>
  );
};

export default UserAuthForm;
