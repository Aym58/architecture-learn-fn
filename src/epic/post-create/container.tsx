import React from 'react';

import { FormikValues, useFormik } from 'formik';

import { convertValues } from './convert';

import { Component } from './component';

import {
  FORM_VALUE_ENUM,
  FORM_VALUE_INTER,
  MODULE_NAME,
  PROJECT_ID,
  ACTION_ERROR_INTER,
  FORM_VALUE_TYPE,
} from './constant';

import { useMutation, useQueryClient } from 'react-query';

import { validateInput } from '../../lib/validate';
import { action } from './action';

const initialValues = {
  [FORM_VALUE_ENUM.TEXT]: '',
};

const validate = (values: FormikValues) => validateInput(values);

export const Container: React.FC = () => {
  const queryClient = useQueryClient();

  const request = useMutation(
    (values: FORM_VALUE_INTER) => {
      return action(PROJECT_ID, values);
    },
    {
      onSuccess: () => {
        return queryClient
          .invalidateQueries(MODULE_NAME)
          .then(() => formik.handleReset());
      },
    },
  );

  const formik: FormikValues = useFormik({
    initialValues,
    validate,
    onSubmit: (values: FORM_VALUE_INTER) => {
      console.log('hi from submit');
      const payload = convertValues(values);

      console.log(formik);
      return request.mutate(payload);
    },
  });

  const isSuccess = () => {
    if (request.isSuccess) {
      return true;
    }
  };

  const isError = () => {
    if (request.isError) {
      return true;
    }
  };

  const getErrorMessage = () => {
    const error: ACTION_ERROR_INTER = request.error as ACTION_ERROR_INTER;
    if (error) {
      return error.message;
    }
  };

  const isFormDisabled = () => {
    if (!formik.isValid) {
      return true;
    }

    if (!formik.dirty) {
      return true;
    }

    if (request.isLoading) {
      return true;
    }

    return false;
  };

  const getFieldValue = (text: FORM_VALUE_TYPE) => formik.values[text];

  return (
    <Component
      formik={formik}
      getFieldValue={getFieldValue}
      isSuccess={isSuccess()}
      isError={isError()}
      errorMessage={getErrorMessage()}
      isFormDisabled={isFormDisabled()}
    />
  );
};
