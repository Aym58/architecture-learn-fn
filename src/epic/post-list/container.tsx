import React from 'react';

import { Component } from './component';

import {
  ACTION_ERROR_INTER,
  ACTION_RESPONSE_INTER,
  DATA_INTER,
  MODULE_NAME,
} from './constant';

import { useQuery } from 'react-query';
import { action } from './action';
import { convert } from './convert';

export const Container: React.FC = () => {
  const preFetch = useQuery(MODULE_NAME, () => action());

  const isLoading = () => {
    if (preFetch.isLoading) {
      return true;
    }
  };

  const isSuccess = () => {
    if (preFetch.isSuccess) {
      return true;
    }
  };

  const isError = () => {
    if (preFetch.isError) {
      return true;
    }
  };

  const getErrorMessage = () => {
    const error: ACTION_ERROR_INTER = preFetch.error as ACTION_ERROR_INTER;
    if (error) {
      return error.message;
    }
  };

  const getData = (): DATA_INTER | undefined => {
    const data = preFetch.data as unknown as ACTION_RESPONSE_INTER;
    if (data) {
      return convert(data);
    }
  };

  return (
    <Component
      data={getData()}
      isLoading={isLoading()}
      isError={isError()}
      isSuccess={isSuccess()}
      errorMessage={getErrorMessage()}
    />
  );
};
