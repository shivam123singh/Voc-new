import * as yup from 'yup';

export const userAuthSchema = yup.object({
  email: yup.string().email('invalid email').required(),
  password: yup.string().required(),
  remember: yup.boolean().default(false).required(),
});
