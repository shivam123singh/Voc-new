import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input-old';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { surveyFormSchema } from '@/lib/validations/dashboard';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';

const CreateSurveyStep1 = ({ handleNext }) => {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(surveyFormSchema),
  });

  const submitForm = (data) => {
    console.log(data)
  }

  return (
    <form onSubmit={handleSubmit(submitForm)}>
      <div className="flex flex-col gap-6">
        <Input
          label="Name of survey"
          id="nameOfSurvey"
          placeholder="MTN 5G User Survey"
          type="text"
          autoCapitalize="none"
          autoCorrect="on"
          size="lg"
          invalid={errors?.email}
          {...register('name_of_survey', { required: true })}
        />
        <Textarea
          label="Survey Description"
          id="surveyDesc"
          placeholder="What is this survey about?"
          type="text"
          autoCapitalize="none"
          autoCorrect="on"
          size="lg"
          {...register('survey_description', { required: true })}
          invalid={errors?.email}
          {...register('email')}
        />

        <Select className="w-full placeholder:text-dark-700">
          <SelectTrigger
            className="w-full h-[55px]"
            label="Feedback from"
            name="select-input"
          >
            <SelectValue
              placeholder="Select audience for this survey"
              className="placeholder:text-sm placeholder:text-dark-700"
            />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel className="">Fruits</SelectLabel>
              <SelectItem value="apple">Apple</SelectItem>
              <SelectItem value="banana">Banana</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      <Button
        type="submit"
        className="mt-8 w-full h-[55px]"
        onClick={(e) => {
          e.preventDefault();
          handleNext();
        }}
      >
        Next
      </Button>
    </form>
  );
};

export default CreateSurveyStep1;
