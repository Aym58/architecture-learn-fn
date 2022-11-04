import React, { ReactNode } from 'react';

import styled from 'styled-components';

import { PADDING_ENUM } from '../../theme/sizes';

export const Elem: React.FC<{
  children?: ReactNode;
}> = ({ children }) => {
  return <Grid>{children}</Grid>;
};

const Grid = styled.div`
  display: grid;
  width: 100%;
  align-items: start;
  grid-gap: ${PADDING_ENUM.DEFAULT};
`;
