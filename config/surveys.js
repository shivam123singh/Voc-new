import {
  CalendarDays,
  CheckSquare,
  ChevronDownSquare,
  Circle,
  Clock3,
  FilePlus,
  Mail,
  Star,
  Minus,
  Phone,
  TextCursorInput,
  Text,
  ChevronsLeftRight,
} from 'lucide-react';

const SIZE = 20;

export const surveysConfig = {
  inputList: [
    {
      value: 0,
      icon: <TextCursorInput size={SIZE} />,
      label: 'Short text',
    },
    {
      value: 1,
      icon: <Text size={SIZE} />,
      label: 'Paragraph',
    },
    {
      value: 2,
      icon: <Circle size={SIZE} />,
      label: 'Radio',
    },
    {
      value: 3,
      icon: <CheckSquare size={SIZE} />,
      label: 'Checkbox',
    },
    {
      value: 4,
      icon: <Mail size={SIZE} />,
      label: 'Email',
    },
    {
      value: 5,
      icon: <Phone size={SIZE} />,
      label: 'Phone',
    },
    {
      value: 6,
      icon: <ChevronDownSquare size={SIZE} />,
      label: 'Drop down',
    },
    {
      value: 7,
      icon: <FilePlus size={SIZE} />,
      label: 'File Upload',
    },
    {
      value: 8,
      icon: <Clock3 size={SIZE} />,
      label: 'Time',
    },
    {
      value: 9,
      icon: <CalendarDays size={SIZE} />,
      label: 'Date',
    },
    {
      value: 10,
      icon: <Minus size={SIZE} />,
      label: 'Section',
    },
    {
      value: 12,
      icon: <Star size={SIZE} />,
      label: 'Rating',
    },
    {
      value: 13,
      icon: <ChevronsLeftRight size={SIZE} />,
      label: 'Scale',
    },
  ],
};

// respondent survey config
export const surveyElements = {
  elements: [
    {
      type: 2,
      name: "Radio",
      question: "Where are you located?",
      id: 1,
      location: ["Lagos", "Abuja", "Port-harcourt", "Kaduna"],
    },
    {
      type: 3,
      name: "Checkbox",
      question: "Where have you been to this year? (you can select multiple)",
      id: 2,
      location: ["Niger", "Delta", "Ogun", "Yobe"],
    },
    {
      type: 0,
      name: "Short text",
      question: "How will you describe the service in one word?",
      id: 3,
    },
    {
      type: 3,
      name: "Checkbox",
      question: "Where have you been to this year ?",
      id: 4,
      location: ["Kano", "Dutse", "Ilorin", "Ebonyi"],
    },
    {
      type: 1,
      name: "Paragraph",
      question: "Tell us more about your answer to question 3 above.",
      id: 5,
    },
    {
      type: 4,
      name: "Email",
      question: "What is your email address?",
      id: 6,
    },
    { type: 7, name: "File upload", question: 'Upload a copy of your receipt', id: 9 },
    { type: 8, name: "Time", question: 'Enter preferred time', id: 7 },
    { type: 9, name: "Date", question: 'Enter preferred date', id: 8 },
    { type: 11, name: "Scale", question: 'On a scale of 0 - 10, with zero being the lowest and 10 being the highest, how likely are you to recommend 5G to family and friends - Scale question', id: 9 },
    // { type: 5, name: "Phone number" },
  ],
  scales: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
};