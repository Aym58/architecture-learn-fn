import React, { ReactNode } from 'react';

import styled, { css } from 'styled-components';

import {
  SIZE_FONT_ENUM,
  SIZE_FONT_DATA,
  SIZE_FONT_TYPE,
  SIZE_FONT_WEIGHT_DATA,
} from '../../theme/sizes';

export const Elem: React.FC<{
  children?: ReactNode;
  type?: SIZE_FONT_TYPE;
}> = ({ children, type }) => {
  return <Text type={type}>{children}</Text>;
};

const Text = styled.span<{ type?: SIZE_FONT_TYPE }>`
  ${({ type = SIZE_FONT_ENUM.DEFAULT }) => css`
    font-size: ${SIZE_FONT_DATA[type]};
    font-weight: ${SIZE_FONT_WEIGHT_DATA[type]};
  `}
`;
