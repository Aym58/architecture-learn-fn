import { FORM_VALUE_ENUM, FORM_VALUE_INTER } from './constant';

export const convertValues = (values: FORM_VALUE_INTER): FORM_VALUE_INTER => ({
  ...values,
  [FORM_VALUE_ENUM.TEXT]: values[FORM_VALUE_ENUM.TEXT].trim(),
});
