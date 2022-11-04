import React from 'react';
import { IonProgressBar } from '@ionic/react';

import styled from 'styled-components';
import { COLOR_DATA, COLOR_ENUM } from '../../theme/color';

export const Elem: React.FC = () => {
  return <Progress type="indeterminate" />;
};

const Progress = styled(IonProgressBar)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;

  --progress-background: ${COLOR_DATA[COLOR_ENUM.BUTTON]};
`;
