export const surveyTableConfig = {
  recentSurveyAccessor: [
    { accessor: 'survey_name' },
    { accessor: 'feedback_from' },
    { accessor: 'last_modified' },
    { accessor: 'modified_by' },
    { accessor: 'status' },
  ],

  surveyDummy: [
    {
      survey_name: '4G to 5G router migration survey',
      feedback_from: 'Customer',
      last_modified: 'Jul 17, 2023 11:45 AM',
      modified_by: 'chibuzor.akujobi@mtn.com',
      status: 'active',
    },
    {
      survey_name: '4G to 5G router migration survey',
      feedback_from: 'Customer',
      last_modified: 'Jul 17, 2023 11:45 AM',
      modified_by: 'chibuzor.akujobi@mtn.com',
      status: 'inactive',
    },
    {
      survey_name: '4G to 5G router migration survey',
      feedback_from: 'Customer',
      last_modified: 'Jul 17, 2023 11:45 AM',
      modified_by: 'chibuzor.akujobi@mtn.com',
      status: 'draft',
    },
    {
      survey_name: '4G to 5G router migration survey',
      feedback_from: 'Customer',
      last_modified: 'Jul 17, 2023 11:45 AM',
      modified_by: 'chibuzor.akujobi@mtn.com',
      status: 'draft',
    },
  ],

  surveyTableHead: [
    { title: 'Survey name', width: 'w-[200px]' },
    { title: 'Feedback from', width: 'w-[100px]' },
    { title: 'Last modified', width: 'w-[100px]' },
    { title: 'Modified by', width: 'w-[100px]' },
    { title: 'Status', width: 'w-[100px]' },
  ],
};

export const responseTableConfig = {
  data: [
    {
      id: 0,
      survey_name: '4G to 5G router migration survey',
      feedback_from: 'Customer',
      total_responses: '2,456,798',
      last_responses: 'Jul 17, 2023 11:45 AM',
      status: 'active',
    },
    {
      id: 1,
      survey_name: '4G to 5G router migration survey',
      feedback_from: 'Customer',
      total_responses: '2,456,798',
      last_responses: 'Jul 17, 2023 11:45 AM',
      status: 'active',
    },
    {
      id: 2,
      survey_name: '4G to 5G router migration survey',
      feedback_from: 'Customer',
      total_responses: '2,456,798',
      last_responses: 'Jul 17, 2023 11:45 AM',
      status: 'active',
    },
    {
      id: 3,
      survey_name: '4G to 5G router migration survey',
      feedback_from: 'Customer',
      total_responses: '2,456,798',
      last_responses: 'Jul 17, 2023 11:45 AM',
      status: 'active',
    },
  ],
};

export const customerTableConfig = {
  accessor: [
    { accessor: 'name' },
    { accessor: 'email' },
    { accessor: 'phone_number' },
  ],

  data: [
    {
      id: 0,
      name: 'Zeena',
      email: 'bella.nadia@gmail.com',
      phone_number: '0812 345 7865',
    },
    {
      id: 1,
      name: 'Zeena',
      email: 'bella.nadia@gmail.com',
      phone_number: '0812 345 7865',
    },
    {
      id: 2,
      name: 'Jon Bellion',
      email: 'jon@bellion.com',
      phone_number: '0812 345 7865',
    },
    {
      id: 3,
      name: 'Jon Bellion',
      email: 'jon@bellion.com',
      phone_number: '0812 345 7865',
    },
  ],

  head: [
    { title: 'Name', width: 'w-[200px]' },
    { title: 'Email', width: 'w-[100px]' },
    { title: 'Phone number', width: 'w-[100px]' },
  ],
};

export const audienceTableConfig = {
  accessors: [{ accessor: 'audience' }, { accessor: 'no_of_respondents' }],

  data: [
    {
      id: 0,
      audience: 'Customers',
      no_of_respondents: '23,568',
    },
    {
      id: 1,
      audience: 'Staff',
      no_of_respondents: '640',
    },
    {
      id: 2,
      audience: 'Contractors 2022',
      no_of_respondents: '32',
    },
    {
      id: 3,
      audience: 'New',
      no_of_respondents: '0',
    },
  ],

  head: [
    { title: 'Audience ', width: 'w-[20%]' },
    { title: 'Number of respondents', width: 'w-[80%]' },
  ],
};

export const audienceSpreadsheetTableConfig = {
  accessor: [
    { accessor: 'name' },
    { accessor: 'email' },
    { accessor: 'phone_number' },
  ],

  data: [
    {
      id: 0,
      name: 'MTN',
      email: 'mtn@gmail.com',
      phone_number: '+23490223322',
    },
    {
      id: 1,
      name: 'MTN',
      email: 'mtn@gmail.com',
      phone_number: '+23490223322',
    },
    {
      id: 2,
      name: 'MTN',
      email: 'mtn@gmail.com',
      phone_number: '+23490223322',
    },
  ],

  head: [
    { title: 'Name ', width: 'w-[35%]' },
    { title: 'Email', width: 'w-[32%]' },
    { title: 'Phone number', width: 'w-[32%]' },
  ],
};
