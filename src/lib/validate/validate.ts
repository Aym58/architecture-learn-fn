import { FormikValues } from 'formik';

interface ERRORS {
  text?: string;
}

export const validate = (values: FormikValues) => {
  const errors: ERRORS = {};
  if (!values) {
    errors.text = 'Required';
  }
  return errors;
};
