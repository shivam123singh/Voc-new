import {
  DASHBOARD_URL,
  SURVEY_URL,
  AUDIENCE_URL,
  RESPONSES_URL,
  SETTINGS_URL,
} from './paths';

export const dashboardConfig = {
  sidebarNav: [
    {
      title: 'Dashboard',
      url: DASHBOARD_URL,
    },
    {
      title: 'Responses',
      url: RESPONSES_URL,
    },
    {
      title: 'Surveys',
      url: SURVEY_URL,
    },
    {
      title: 'Audience',
      url: AUDIENCE_URL,
    },
    {
      title: 'Settings',
      url: SETTINGS_URL,
    },
  ],
  settingsNav: [
    {
      title: 'Account details',
      name: 'account',
    },
    {
      title: 'Users',
      name: 'users',
    },
  ],
};
export const stats = [
  {
    title: 'Overall Engagement',
    value: 85,
    increase: true,
    fontWeight: 'bold',
  },
  { title: 'Survey responses', value: '24,586', iconColor: 'survey' },
  { title: 'People reached', value: '45,896', iconColor: 'people' },
  { title: 'Open rate', value: 85, increase: true },
  { title: 'Response rate', value: 85, increase: true },
  { title: 'Completion rate', value: 85, increase: true },
  { title: 'Abandonment rate', value: 85, increase: true },
];
export const eachResponse = [
  {
    title: 'What is your name?',
    total: '34,580',
    id: 1,
  },
  {
    title: 'What is your name?',
    total: '34,580',
    id: 2,
  },
  {
    title: 'What is your name?',
    total: '34,580',
    id: 3,
  },
  {
    title: 'What is your name?',
    total: '34,580',
    id: 4,
  },
];

export const initialData = [
  {
    name: 'Tuesday',
    uv: 50,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Monday',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Tuesday',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Wednesday',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Thursday',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Friday',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Saturday',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: 'Sunday',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: 'Monday',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: 'Tuesday',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];
