import React, { FormEvent, FormEventHandler, ReactNode } from 'react';

import styled from 'styled-components';

export const Elem: React.FC<{
  children: ReactNode;
  onSubmit: FormEventHandler;
}> = ({ children, onSubmit }) => {
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    onSubmit(event);
  };
  return (
    <Form onSubmit={handleSubmit}>
      {children}
      <Input type="submit" />
    </Form>
  );
};

const Form = styled.form<{}>`
  width: 100%;
`;

const Input = styled.input<{}>`
  display: none;
`;
