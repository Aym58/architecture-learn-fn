import React, { ReactNode } from 'react';

import styled from 'styled-components';

export const Elem: React.FC<{ children: ReactNode }> = ({ children }) => {
  return <Container>{children}</Container>;
};

const Container = styled.div`
  display: flex;
  width: 100%;
  margin: 0 auto;
  box-sizing: border-box;
  padding: 0;
`;
