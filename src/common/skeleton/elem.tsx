import React from 'react';

import { GridElement } from '../grid';

import styled from 'styled-components';
import { IonSkeletonText } from '@ionic/react';

export const Elem: React.FC = () => {
  return (
    <GridElement>
      {[1, 2, 3].map((el) => (
        <GridElement key={el}>
          <SkeletonTitle animated={true} />
          <GridElement>
            <SkeletonData animated={true} />
            <SkeletonData animated={true} />
          </GridElement>
        </GridElement>
      ))}
    </GridElement>
  );
};

const SkeletonTitle = styled(IonSkeletonText)`
  height: 16px;
  width: 50%;
  margin: 0;
`;

const SkeletonData = styled(IonSkeletonText)`
  height: 14px;
  margin: 0;
`;
