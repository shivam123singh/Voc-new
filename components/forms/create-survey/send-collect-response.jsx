'use client';
import { useRef, useState, useContext } from 'react';
import { useRouter } from 'next/navigation';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

import { Plus, Send, Link2, Code2 } from 'lucide-react';

import { SurveyContext } from '@/context/survey-context';

import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

import { Button } from '@/components/ui/button';

import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const FormSchema = yup.object({
  AudienceId: yup.string().required('Choose targeted audience'),
});

const SendAndCollectResponseForm = () => {
  const router = useRouter();
  const { setSurveyHandler } = useContext(SurveyContext);
  const form = useForm({
    resolver: yupResolver(FormSchema),
  });

  const [copyText] = useState(
    'https://forms.voc.mtn.com/Pages/ResponsePage.aspxid=UMu5yUQ2tE2iZ_qE3y9M6-2bA9UBaWZPvnIxRxnJp1UOE1CNUVVOVc5WFdTNFRCSTNHWlQ5SVZMMi4u'
  );
  const copyInputRef = useRef(null);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(copyText);
      console.log('Text copied to clipboard');
    } catch (error) {
      console.error('Failed to copy text:', error);
    }
  };

  const onSubmit = (data) => {
    console.log(data);
    setSurveyHandler((prevInfo) => ({ ...prevInfo, ...data }));
    router.push('/surveys');
  };
  return (
    <div className="w-full mt-2">
      <Tabs defaultValue="send" className="">
        <TabsList className="border border-navyblue justify-start w-full p-0 gap-0">
          <TabsTrigger
            value="send"
            className="w-full h-full border-r border-navyblue data-[state=active]:border-b-0 data-[state=active]:border-navyblue data-[state=active]:bg-[#E6EDF540] data-[state=active]:text-navyblue p-0"
          >
            <div className="flex items-center   space-x-2">
              <Send size={16} />
              <span>Send</span>
            </div>
          </TabsTrigger>
          <TabsTrigger
            value="link"
            className="w-full h-full border-r border-navyblue data-[state=active]:border-b-0 data-[state=active]:border-navyblue data-[state=active]:bg-[#E6EDF540] data-[state=active]:text-navyblue p-2"
          >
            <div className="flex items-center  space-x-2">
              <Link2 size={16} className="-rotate-45" />
              <span>Share Link</span>
            </div>
          </TabsTrigger>
          <TabsTrigger
            value="embed"
            className="w-full h-full data-[state=active]:border-b-0  data-[state=active]:bg-[#E6EDF540] data-[state=active]:text-navyblue p-0"
          >
            <div className="flex items-center  space-x-2">
              <Code2 size={16} className="-rotate-45" />
              <span>Embed</span>
            </div>
          </TabsTrigger>
        </TabsList>
        <TabsContent value="send">
          <div>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="w-full space-y-6"
              >
                <FormField
                  control={form.control}
                  name="AudienceId"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Audience</FormLabel>
                      <Select
                        className=" placeholder:text-dark-700"
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <SelectTrigger className="h-[55px]" name="select-input">
                          <SelectValue
                            placeholder="Customer"
                            className="placeholder:text-sm placeholder:text-dark-700"
                          />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectGroup>
                            <SelectLabel className="">Customer</SelectLabel>
                            <SelectItem value="apple">Apple</SelectItem>
                            <SelectItem value="banana">Banana</SelectItem>
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div>
                  <label className="relative flex items-center justify-center border border-dashed border-[#28668B] min-h-[48px] p-4 rounded-md bg-transparent">
                    <div className="flex space-x-2 text-[#28668B]">
                      <Plus size={16} />
                      <span className="font-normal text-sm">
                        Add a new audience
                      </span>
                    </div>

                    <Input
                      type="file"
                      className="absolute h-full inset-0 cursor-pointer opacity-0"
                      accept=".jpg, .jpeg, .png, .pdf"
                    />
                  </label>
                </div>
                <Button className="w-full" type="submit" size="lg">
                  Proceed
                </Button>{' '}
              </form>
            </Form>
          </div>
        </TabsContent>
        <TabsContent value="link">
          <TabsContent value="link">
            <h2 className="font-normal text-grey-100 text-[13px] leading-5">
              Link to survey
            </h2>
            <Textarea
              type="text"
              value={copyText}
              ref={copyInputRef}
              readOnly
              className="bg-white border border-input rounded-lg w-full min-h-[143px] p-3 mb-auto resize-none text-xs text-secondary-500 select-none"
            />
            <Button
              className="w-full text-[13px] font-normal mt-4"
              variant="outline"
              onClick={copyToClipboard}
              size="lg"
            >
              Copy link
            </Button>
          </TabsContent>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default SendAndCollectResponseForm;
