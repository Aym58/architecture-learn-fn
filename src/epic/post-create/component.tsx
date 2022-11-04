import React from 'react';
import { IonButton, IonInput } from '@ionic/react';
import { LayoutElement } from '../../common/layout-element';
import { TextElement } from '../../common/text';
import { GridElement } from '../../common/grid';

import { FormikValues } from 'formik';
import { FormElem } from '../../common/form';
import { FORM_VALUE_ENUM, POST_CREATE_SUCCESS } from './constant';

export const Component: React.FC<{
  formik: FormikValues;
  isFormDisabled: boolean;
  isError?: boolean;
  errorMessage?: string;
  getFieldValue: Function;
  isSuccess?: boolean;
}> = ({
  formik,
  isFormDisabled,
  isError,
  isSuccess,
  errorMessage,
  getFieldValue,
}) => {
  return (
    <React.Fragment>
      <FormElem onSubmit={formik.handleSubmit}>
        <GridElement>
          <IonInput
            value={getFieldValue(FORM_VALUE_ENUM.TEXT)}
            name={FORM_VALUE_ENUM.TEXT}
            onIonChange={formik.handleChange}
          ></IonInput>
          <IonButton type="submit" size="default" disabled={isFormDisabled}>
            Create Post
          </IonButton>
          {isError && (
            <LayoutElement>
              <TextElement type="default">{errorMessage}</TextElement>
            </LayoutElement>
          )}
          {isSuccess && (
            <LayoutElement>
              <TextElement type="default">{POST_CREATE_SUCCESS}</TextElement>
            </LayoutElement>
          )}
        </GridElement>
      </FormElem>
    </React.Fragment>
  );
};
