import * as yup from 'yup';

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

export const surveyFormSchema = yup.object().shape({
  SurveyName: yup.string().required('Survey name is required'),
  SurveyDescription: yup.string().required('Description is required'),
  EndDate: yup.date().required('Survey expiry date is required'),
});

export const userAccountSchema = yup.object().shape({
  first_name: yup
    .string()
    .required('First name is required')
    .min(3, 'First name should be at least 2 characters')
    .max(50, 'First name should not exceed 50 characters'),

  last_name: yup
    .string()
    .required('Last name is required')
    .min(2, 'Last name should be at least 2 characters')
    .max(50, 'Last name should not exceed 50 characters'),

  email: yup
    .string()
    .required('Email is required')
    .email('Invalid email address')
    .max(100, 'Email should not exceed 100 characters'),

  phone_number: yup
    .string()
    .required('Phone number is required')
    .matches(/^\+?[0-9]+$/, 'Invalid phone number') // Matches digits, optionally with a leading '+' sign
    .min(10, 'Phone number should be at least 10 digits')
    .max(15, 'Phone number should not exceed 15 digits'),
});

export const createAudienceFormSchema = yup.object({
  name_of_audience: yup.string().required('Name of audience is required').min(3, 'Name of audience should be at least 2 characters').max(50, 'Name of audience should not exceed 50 characters'),
  audience_description: yup.string().required('Audience description is required').min(3, 'Audience description should be at least 2 characters').max(200, 'Audience description should not exceed 200 characters'),
});

export const passwordValidationSchema = yup.object().shape({
  old_password: yup.string().required('Please, enter your current password'),
  new_password: yup
    .string()
    .required('Please, enter new password')
    .min(8, 'Password must be at least 8 characters long')
    .matches(
      /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,
      'Password must contain at least one uppercase letter, one lowercase letter, one digit, and one special character'
    ),

  confirm_password: yup
    .string()
    .oneOf([yup.ref('new_password'), null], 'Passwords must match')
    .required('Please, confirm your new password'),
});

export const createUserSchema = yup.object().shape({
  first_name: yup
    .string()
    .required('First name is required')
    .min(3, 'First name should be at least 2 characters')
    .max(50, 'First name should not exceed 50 characters'),

  last_name: yup
    .string()
    .required('Last name is required')
    .min(2, 'Last name should be at least 2 characters')
    .max(50, 'Last name should not exceed 50 characters'),

  email: yup
    .string()
    .required('Email is required')
    .email('Invalid email address')
    .max(100, 'Email should not exceed 100 characters'),

  role: yup.string().required('User role is required'),
});

export const AddAgentSchema = yup.object().shape({
  name: yup
    .string()
    .required('First name is required')
    .min(3, 'Agent name should be at least 2 characters')
    .max(50, 'Agent name should not exceed 50 characters'),

  email: yup
    .string()
    .required('Email is required')
    .email('Invalid email address')
    .max(100, 'Email should not exceed 100 characters'),

  phone: yup
    .string()
    .required('Phone number is required')
    .min(11, 'Phone number should not exceed 11 numbers')
    .min(11, 'Phone number should not exceed 11 numbers')
    .matches(phoneRegExp, "Valid phone number is required")
    .required("Enter a valid phone number"),
});
