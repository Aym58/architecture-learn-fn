import React, { ReactNode } from 'react';
import { IonContent } from '@ionic/react';

import styled from 'styled-components';
import { PADDING_ENUM } from '../../theme/sizes';

export const Elem: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <IonContent>
      <Container>{children}</Container>
    </IonContent>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  gap: ${PADDING_ENUM.DEFAULT};
  width: 100%;
  min-height: 100px;
  margin: 0 auto;
  box-sizing: border-box;
  padding: ${PADDING_ENUM.LARGE} ${PADDING_ENUM.DEFAULT};
`;
