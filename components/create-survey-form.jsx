'use client';
import { useContext, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Loader2 } from 'lucide-react';


import { SurveyContext } from '@/context/survey-context';

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from './ui/button';
import { Textarea } from '@/components/ui/textarea';
import { DatePicker } from './ui/date-picker';

import { surveyFormSchema } from '@/lib/validations/dashboard';
import { CREATE_SURVEY_URL } from '@/config/paths';

const CreateSurveyForm = () => {
  const { setSurveyHandler } = useContext(SurveyContext);
  const [loading, setLoading] = useState(false);
  const form = useForm({ resolver: yupResolver(surveyFormSchema) });
  const router = useRouter();

  const onSubmit = (data) => {
    setLoading(true);

    setSurveyHandler(data);
    setTimeout(() => {
      setLoading(false);
      router.push(CREATE_SURVEY_URL);
    }, 1000);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
        <FormField
          control={form.control}
          name="SurveyName"
          render={() => (
            <FormItem>
              <FormLabel>Name of survey</FormLabel>
              <FormControl>
                <Input
                  autoComplete="off"
                  placeholder="MTN 5G User Survey"
                  invalid={form.formState.errors?.SurveyName}
                  {...form.register('SurveyName')}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="SurveyDescription"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Survey Description</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="What is this survey about?"
                  className="resize-none"
                  {...field}
                />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="EndDate"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel>Expiry Date</FormLabel>
              <DatePicker
                size="sm"
                date={field.value}
                mode="single"
                selected={field.value}
                onSelect={field.onChange}
                disabled={(date) => date < new Date()}
              />
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="mt-8 w-full h-[55px]">
          {loading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Please wait
            </>
          ) : (
            'Next'
          )}
        </Button>
      </form>
    </Form>
  );
};

export default CreateSurveyForm;
