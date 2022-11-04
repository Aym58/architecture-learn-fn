import React from 'react';

import { Component } from './component';

import { MODULE_NAME } from './constant';

import { useMutation, useQueryClient } from 'react-query';
import { action } from './action';

export const Container: React.FC<{
  projectId: number;
  postId: number;
}> = ({ projectId, postId }) => {
  const queryClient = useQueryClient();

  const request = useMutation(() => action(projectId, postId), {
    onSuccess: () => {
      return queryClient.invalidateQueries(MODULE_NAME);
    },
  });

  const isLoading = () => {
    if (request.isLoading) {
      return true;
    }
  };

  const onClick = () => {
    request.mutate();
  };

  return <Component onClick={onClick} isLoading={isLoading()} />;
};
