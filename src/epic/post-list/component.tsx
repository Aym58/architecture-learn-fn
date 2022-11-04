import React from 'react';

import { DATA_INTER } from './constant';

import { LayoutElement } from '../../common/layout-element';
import { TextElement } from '../../common/text';
import { GridElement } from '../../common/grid';

import { PostDelete } from '../post-delete';

import { POST_LIST_TITLE } from './constant';
import { Skeleton } from '../../common/skeleton';

export const Component: React.FC<{
  data?: DATA_INTER;
  isLoading?: boolean;
  isSuccess?: boolean;
  isError?: boolean;
  errorMessage?: string;
}> = ({ data, isLoading, isSuccess, isError, errorMessage }) => {
  return (
    <React.Fragment>
      {isLoading && <Skeleton />}

      {isError && (
        <LayoutElement>
          <TextElement type="default">{errorMessage}</TextElement>
        </LayoutElement>
      )}

      {isSuccess && data && !data.isEmpty && (
        <GridElement>
          <TextElement type="header">{POST_LIST_TITLE}</TextElement>
          {data?.list.map((post) => {
            return (
              <React.Fragment key={post.id}>
                <LayoutElement>
                  <TextElement type="default">{post.text}</TextElement>
                </LayoutElement>{' '}
                <PostDelete projectId={post.project.id} postId={post.id} />
              </React.Fragment>
            );
          })}
        </GridElement>
      )}
    </React.Fragment>
  );
};
